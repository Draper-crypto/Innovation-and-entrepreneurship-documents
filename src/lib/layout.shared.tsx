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
        icon: <IconHome size={20} />,
        text: '首页',
        url: '/',
        active: 'nested-url',
      },
      {
        icon: <IconBook size={20} />,
        text: '文档',
        url: '/docs',
        active: 'nested-url',
      },
      {
        icon: <IconNotes size={20} />,
        text: '博客',
        url: '/blog',
        active: 'nested-url',
      },
      {
        icon: <IconHeart size={20} />,
        text: '赞助商',
        url: '/sponsors',
        active: 'nested-url',
      },
    ],
  };
}