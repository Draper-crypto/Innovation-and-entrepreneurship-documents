import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { i18n } from '@/lib/i18n';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions;
  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      links={[]}
      i18n={i18n}
    >
      {children}
    </DocsLayout>
  );
}
