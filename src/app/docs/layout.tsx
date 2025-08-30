import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { Metadata } from 'next';
import { IconHome, IconBook, IconNotes } from '@tabler/icons-react';

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
  const base = baseOptions();

  return (
    <>
      <DocsLayout 
        tree={source.pageTree}
        {...base}
        // 显式指定 Sidebar Tabs：标题/描述/URL/图标，统一所有文档页的切换方式与外观
        sidebar={{
          tabs: [
            {
              title: '创新创业文档',
              description: '创新创业文档',
              url: '/docs/innovation',
              icon: <IconNotes size={16} />,
            },
            {
              title: '规范文档',
              description: '规范文档',
              url: '/docs/standards',
              icon: <IconBook size={16} />,
            },
          ],
        }}
        // 清空 links，避免重复渲染
        links={[]}
      >
        {children}
      </DocsLayout>
    </>
  );
}
