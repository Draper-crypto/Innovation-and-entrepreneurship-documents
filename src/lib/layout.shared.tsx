import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { IconHome, IconBook, IconNotes, IconHeart, IconCompass } from '@tabler/icons-react';

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
        <span className="inline-flex items-center gap-2">
          {/* Use project logo instead of text + placeholder icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/favicon.svg"
            alt="Site Logo"
            width={96}
            height={28}
            className="h-7 w-[96px] object-contain"
          />
        </span>
      ),
    },
    links: [
      {
        type: 'menu',
        text: '文档',
        items: [
          {
            text: '概览',
            description: '文档首页与索引，快速了解站点结构',
            url: '/docs',
            icon: <IconHome size={16} />,
          },
          {
            text: '指南',
            description: '入门、核心概念与最佳实践',
            url: '/docs/guide',
            icon: <IconBook size={16} />,
          },
          {
            text: '编写规范',
            description: '编写文档的规范与指南',
            url: '/docs/standards',
            icon: <IconNotes size={16} />,
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
      {
        // 新增：外链图标按钮 — 放在导航栏右侧区域
        type: 'icon',
        on: 'nav',
        url: 'https://www.elexvx.com',
        external: true,
        label: '访问 Elexvx 官网',
        icon: <IconCompass size={24} />,
        text: 'Elexvx 官网',
        secondary: true,
      },
    ],
  };
}