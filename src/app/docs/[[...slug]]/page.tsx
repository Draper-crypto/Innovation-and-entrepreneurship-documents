import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';
import { Rate } from '@/components/feedback';
import Link from 'next/link';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const slug = params.slug;

  // 当访问 /docs 根路径时，重定向到默认分区（创新文档）
  if (!slug) {
    redirect('/docs/innovation');
  }

  const page = source.getPage(slug);

  // Fallback: when visiting a directory like /docs/innovation without an index.mdx,
  // render a directory index listing its child pages.
  if (!page) {
    const dir = Array.isArray(slug) ? slug.join('/') : '';
    const children = source
      .getPages()
      .filter((p) => p.path.startsWith(dir + '/'))
      // 只展示当前目录的直接子页面（排除更深层级）
      .filter((p) => {
        const rest = p.path.slice(dir.length + 1); // remove "dir/"
        return !rest.includes('/');
      });

    if (children.length === 0) notFound();

    return (
      <DocsPage tableOfContent={{ enabled: false }}>
        <DocsTitle>{dir || 'Docs'}</DocsTitle>
        <DocsDescription>该目录下包含以下内容：</DocsDescription>
        <DocsBody>
          <ul className="grid gap-4 sm:grid-cols-2">
            {children.map((c) => (
              <li
                key={c.url}
                className="rounded-xl border bg-fd-card text-fd-card-foreground p-4 transition hover:shadow-sm"
              >
                <Link href={c.url} className="font-medium hover:underline">
                  {c.data.title}
                </Link>
                {c.data.description ? (
                  <p className="mt-1 text-sm text-fd-muted-foreground">{c.data.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </DocsBody>
      </DocsPage>
    );
  }

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        enabled: true,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`/api/docs${page.url}`} />
        <ViewOptions
          markdownUrl={`/api/docs${page.url}`}
          githubUrl={`https://github.com/your-org/your-repo/blob/main/content/docs/${page.path}`}
        />
      </div>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
      <Rate
        onRateAction={async (url, feedback) => {
          'use server';
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/feedback`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...feedback,
              url,
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to submit feedback');
          }

          return response.json();
        }}
      />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const page = source.getPage(slug);
  if (page) {
    return {
      title: page.data.title,
      description: page.data.description,
    };
  }

  const dir = Array.isArray(slug) ? slug.join('/') : '';
  const children = source
    .getPages()
    .filter((p) => p.path.startsWith(dir + '/'))
    .filter((p) => {
      const rest = p.path.slice(dir.length + 1);
      return !rest.includes('/');
    });

  if (children.length === 0) notFound();

  return {
    title: dir || 'Docs',
    description: `目录 · ${dir || 'Docs'}`,
  };
}
