import { Feed } from 'feed';
import { source } from '@/lib/source';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export function getRSS() {
  const feed = new Feed({
    title: '创新创业工作坊',
    id: `${baseUrl}/docs`,
    link: `${baseUrl}/docs`,
    language: 'zh-CN',
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  for (const page of source.getPages()) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: page.data.lastModified ? new Date(page.data.lastModified) : new Date(),
    });
  }

  return feed.rss2();
}
