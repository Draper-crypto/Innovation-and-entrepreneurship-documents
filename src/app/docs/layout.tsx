import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: 'Elexvx Lab Documentation RSS',
          url: '/docs/rss.xml',
        },
      ],
      'application/atom+xml': [
        {
          title: 'Elexvx Lab Documentation Atom',
          url: '/docs/atom.xml',
        },
      ],
      'application/feed+json': [
        {
          title: 'Elexvx Lab Documentation JSON Feed',
          url: '/docs/feed.json',
        },
      ],
    },
  },
};

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      // 显式声明 Sidebar Tabs，确保显示为下拉样式，并在 /docs 首页也可见
      sidebar={{
        tabs: [
          {
            title: '指南',
            description: '入门与概念',
            url: '/docs/guide',
            urls: new Set(['/docs', '/docs/guide']),
          },
          {
            title: '示例',
            description: '代码示例与演示',
            url: '/docs/examples',
          },
        ],
      }}
      footer={<Footer />}
    >
      {children}
    </DocsLayout>
  );
}
