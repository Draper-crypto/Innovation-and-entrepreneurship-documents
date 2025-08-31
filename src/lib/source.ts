import { docs, blog as blogPosts } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons as TablerIcons } from '@tabler/icons-react';
import * as React from 'react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: (options) => {
    const icon = options?.icon; // 安全地访问 icon 属性
    if (!icon) return undefined;
    const iconMap = TablerIcons as any;
    const Cmp = iconMap[icon] || iconMap.IconBulb; // 安全兜底
    if (Cmp) return React.createElement(Cmp, { size: 16 });
    return React.createElement('span', null, icon);
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});
