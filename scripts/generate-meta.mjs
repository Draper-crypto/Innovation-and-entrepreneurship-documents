#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const DOCS_ROOT = path.resolve(process.cwd(), 'content', 'docs');

/**
 * Extract title from MDX frontmatter if present.
 */
async function extractTitleFromIndex(dir) {
  const indexPath = path.join(dir, 'index.mdx');
  try {
    const raw = await fs.readFile(indexPath, 'utf8');
    const fmMatch = raw.match(/^---[\s\S]*?---/);
    if (fmMatch) {
      const titleMatch = fmMatch[0].match(/\btitle\s*:\s*(.+)/);
      if (titleMatch) return titleMatch[1].trim().replace(/^['"]|['"]$/g, '');
    }
  } catch {}
  return undefined;
}

function normalizeName(name) {
  // strip numeric prefix like 01_, 10- or 001.
  const m = name.match(/^(\d+)[-_\.](.+)$/);
  return m ? m[2] : name;
}

function getOrderKey(name) {
  const m = name.match(/^(\d+)[-_\.]/);
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

function sortByOrder(a, b) {
  const oa = getOrderKey(a);
  const ob = getOrderKey(b);
  if (oa !== ob) return oa - ob;
  return normalizeName(a).localeCompare(normalizeName(b), 'zh-Hans');
}

// Merge existing custom order with computed pages (dedup), keeping 'index' first when present
function mergeOrder(existingPages = [], computedPages = []) {
  const computedSet = new Set(computedPages);
  // keep only items that still exist
  const filteredExisting = existingPages.filter((p) => computedSet.has(p));
  const res = [];
  const pushIfNew = (p) => {
    if (!res.includes(p)) res.push(p);
  };
  // ensure index first if it exists
  if (computedSet.has('index')) pushIfNew('index');
  // then existing order excluding index
  for (const p of filteredExisting) {
    if (p !== 'index') pushIfNew(p);
  }
  // then append remaining computed pages
  for (const p of computedPages) pushIfNew(p);
  return res;
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function readJSON(p) {
  try {
    const raw = await fs.readFile(p, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeJSON(p, data) {
  const text = JSON.stringify(data, null, 2) + '\n';
  await fs.writeFile(p, text, 'utf8');
}

async function hasMDX(dir) {
  try {
    const items = await fs.readdir(dir);
    return items.some((f) => f.endsWith('.mdx'));
  } catch {
    return false;
  }
}

async function buildMetaForDir(dir, isRootChild = false) {
  const items = await fs.readdir(dir, { withFileTypes: true });
  const mdxFiles = items
    .filter((d) => d.isFile() && d.name.endsWith('.mdx'))
    .map((d) => d.name.replace(/\.mdx$/, ''))
    .filter((n) => n !== 'index')
    .sort(sortByOrder);

  const subdirs = (await Promise.all(
    items
      .filter((d) => d.isDirectory())
      .map(async (d) => ({ name: d.name, has: await hasMDX(path.join(dir, d.name)) }))
  ))
    .filter((x) => x.has)
    .map((x) => x.name)
    .sort(sortByOrder);

  // computed pages: index, subdirs, mdx files
  const computedPages = [];
  if (items.some((d) => d.isFile() && d.name === 'index.mdx')) computedPages.push('index');
  computedPages.push(...subdirs);
  computedPages.push(...mdxFiles);

  const metaPath = path.join(dir, 'meta.json');
  const existing = await readJSON(metaPath);

  let title = existing?.title;
  if (!title) title = (await extractTitleFromIndex(dir)) || path.basename(dir);

  let pages;
  if (Array.isArray(existing?.pages) && existing.pages.length > 0) {
    pages = mergeOrder(existing.pages, computedPages);
  } else {
    pages = computedPages;
  }

  const result = { ...(existing || {}), title, pages };
  if (isRootChild) result.root = true;

  // Write only if changed
  const changed = JSON.stringify(existing) !== JSON.stringify(result);
  if (changed) {
    await writeJSON(metaPath, result);
    return { metaPath, updated: true };
  }
  return { metaPath, updated: false };
}

async function walkDocs(root) {
  const tasks = [];
  const entries = await fs.readdir(root, { withFileTypes: true });

  // Update root meta if exists, but preserve custom pages order if provided
  const rootMetaPath = path.join(root, 'meta.json');
  const rootExisting = await readJSON(rootMetaPath);
  if (rootExisting) {
    const rootSubDirs = (await Promise.all(
      entries
        .filter((d) => d.isDirectory())
        .map(async (d) => ({ name: d.name, has: await hasMDX(path.join(root, d.name)) }))
    ))
      .filter((x) => x.has)
      .map((x) => x.name)
      .sort(sortByOrder);

    const rootPages = Array.isArray(rootExisting.pages) && rootExisting.pages.length > 0
      ? mergeOrder(rootExisting.pages, rootSubDirs)
      : rootSubDirs;

    const newRoot = { ...rootExisting, pages: rootPages };
    if (JSON.stringify(rootExisting) !== JSON.stringify(newRoot)) {
      await writeJSON(rootMetaPath, newRoot);
      tasks.push({ metaPath: rootMetaPath, updated: true });
    }
  }

  for (const d of entries) {
    if (!d.isDirectory()) continue;
    const abs = path.join(root, d.name);
    const res = await buildMetaForDir(abs, true);
    tasks.push(res);

    const subEntries = await fs.readdir(abs, { withFileTypes: true });
    for (const sd of subEntries) {
      if (!sd.isDirectory()) continue;
      const subAbs = path.join(abs, sd.name);
      tasks.push(await buildMetaForDir(subAbs, false));
    }
  }
  return tasks;
}

(async () => {
  try {
    await ensureDir(DOCS_ROOT);
    const results = await walkDocs(DOCS_ROOT);
    const updated = results.filter((r) => r.updated).length;
    console.log(`[meta] generated/updated ${updated} meta.json files`);
  } catch (e) {
    console.error('[meta] generation failed:', e);
    process.exitCode = 1;
  }
})();