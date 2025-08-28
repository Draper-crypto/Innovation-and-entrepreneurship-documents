import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { TableOfContents } from 'fumadocs-core/toc';
import { i18n } from '@/lib/i18n';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions();
  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      links={[]}
      toc={<TableOfContents />}
      i18n={i18n}
    >
      {children}
    </DocsLayout>
  );
}
