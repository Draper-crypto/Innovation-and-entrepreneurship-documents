import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { IconBrandTabler } from '@tabler/icons-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <IconBrandTabler className="w-6 h-6" />
          ElexvxAI Lab
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        { text: '文档', url: '/docs', active: 'nested-url' },
        { text: '博客', url: '/blog', active: 'nested-url' },
        { text: '赞助商', url: '/sponsors', active: 'url' }
      ],
  };
}
