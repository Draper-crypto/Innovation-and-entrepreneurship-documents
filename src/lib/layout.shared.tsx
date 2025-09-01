import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { IconBook, IconNotes, IconCompass } from '@tabler/icons-react';

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
          <Image
            src="/images/favicon.svg"
            alt="Site Logo"
            width={96}
            height={28}
            className="h-7 w-[96px] object-contain"
            priority
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
            text: '创新大赛',
            description: '入门、核心概念与最佳实践',
            url: '/docs/innovation',
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
        on: 'nav',
        text: '博客',
        url: '/blog',
      },
      {
        on: 'nav',
        text: '赞助商',
        url: '/sponsors',
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
