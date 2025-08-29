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
      links={[]}
      nav={{
        ...baseOptions().nav,
        title: '文档',
        url: '/',
        // children: <LanguageSelector />,
      }}
      footer={<Footer />}
    >
      {children}
    </DocsLayout>
  );
}
