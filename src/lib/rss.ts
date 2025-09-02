import { Feed } from 'feed';
import { source } from './source';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  '';

function createBaseFeed(generator: string) {
  return new Feed({
    title: 'ElexvxAI Lab Documentation',
    description: 'Latest updates and documentation for ElexvxAI Lab',
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ElexvxAI Lab`,
    generator,
  });
}

function populateFeed(feed: Feed) {
  const pages = source.getPages();

  for (const page of pages) {
    if (page.data.title && page.data.description) {
      feed.addItem({
        title: page.data.title,
        description: page.data.description,
        id: `${baseUrl}${page.url}`,
        link: `${baseUrl}${page.url}`,
        date: new Date(page.data.lastModified || Date.now()),
        author: [
          {
            name: 'ElexvxAI Lab Team',
            email: 'team@elexvx.com',
          },
        ],
        category: page.slugs.length > 1 ? [{ name: page.slugs[0] }] : [{ name: 'documentation' }],
      });
    }
  }
}

export function getRSS() {
  const feed = createBaseFeed('Fumadocs RSS Generator');
  populateFeed(feed);
  return feed.rss2();
}

export function getAtom() {
  const feed = createBaseFeed('Fumadocs Atom Generator');
  populateFeed(feed);
  return feed.atom1();
}

export function getJSON() {
  const feed = createBaseFeed('Fumadocs JSON Feed Generator');
  populateFeed(feed);
  return feed.json1();
}
