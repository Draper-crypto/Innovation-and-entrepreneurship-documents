import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { IconHome, IconBook, IconNotes, IconHeart } from '@tabler/icons-react';

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
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          Elexvx Lab
        </>
      ),
    },
    links: [
      {
        type: 'menu',
        text: '文档',
        items: [
          {
            text: '指南',
            description: '入门与概念',
            url: '/docs/guide',
          },
          {
            text: '示例',
            description: '代码示例与演示',
            url: '/docs/examples',
          },
        ],
      },
      {
        type: 'custom',
        on: 'nav',
        children: (
          <div className="flex items-center gap-4">
            <a href="/blog" className="hover:underline">博客</a>
            <a href="/sponsors" className="hover:underline">赞助商</a>
          </div>
        ),
      },
    ],
  };
}