import { Feed } from 'feed';
import { source } from './source';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export function getRSS() {
  const feed = new Feed({
    title: 'Elexvx Lab Documentation',
    description: 'Latest updates and documentation for Elexvx Lab',
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Elexvx Lab`,
    generator: 'Fumadocs RSS Generator',
  });

  // 获取所有文档页面
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
            name: 'Elexvx Lab Team',
            email: 'team@elexvx.com',
          },
        ],
        category: page.slugs.length > 1 ? [page.slugs[0]] : ['documentation'],
      });
    }
  }

  return feed.rss2();
}

export function getAtom() {
  const feed = new Feed({
    title: 'Elexvx Lab Documentation',
    description: 'Latest updates and documentation for Elexvx Lab',
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Elexvx Lab`,
    generator: 'Fumadocs Atom Generator',
  });

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
            name: 'Elexvx Lab Team',
            email: 'team@elexvx.com',
          },
        ],
        category: page.slugs.length > 1 ? [page.slugs[0]] : ['documentation'],
      });
    }
  }

  return feed.atom1();
}

export function getJSON() {
  const feed = new Feed({
    title: 'Elexvx Lab Documentation',
    description: 'Latest updates and documentation for Elexvx Lab',
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: 'en',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Elexvx Lab`,
    generator: 'Fumadocs JSON Feed Generator',
  });

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
            name: 'Elexvx Lab Team',
            email: 'team@elexvx.com',
          },
        ],
        category: page.slugs.length > 1 ? [page.slugs[0]] : ['documentation'],
      });
    }
  }

  return feed.json1();
}