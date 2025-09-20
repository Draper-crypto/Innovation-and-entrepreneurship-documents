import { docs, blog as blogPosts, changelog as changelogPosts } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { IconBulb, IconNotes, IconSparkles } from '@tabler/icons-react';
import * as React from 'react';

type TablerIcon = React.ComponentType<React.ComponentProps<typeof IconBulb>>;

// 预定义常用图标，避免一次性打包整套 Icon 集合
const DEFAULT_ICON: TablerIcon = IconBulb;
const ICON_REGISTRY: Record<string, TablerIcon> = {
  IconBulb,
  IconNotes,
  IconSparkles,
};

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: (icon: string | undefined) => {
    if (!icon) return undefined;
    const IconComponent = ICON_REGISTRY[icon] ?? DEFAULT_ICON;
    return React.createElement(IconComponent, { size: 16 });
  },
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts),
});

export const changelog = loader({
  baseUrl: '/changelog',
  source: createMDXSource(changelogPosts),
});