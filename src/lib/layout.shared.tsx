import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { IconHome, IconBook, IconNotes, IconHeart, IconCompass } from '@tabler/icons-react';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

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
        type: 'custom',
        on: 'nav',
        children: (
          <div className="flex items-center gap-2">
            <a
              href="/blog"
              className="group inline-flex items-center rounded-lg px-3 py-1.5 text-sm transition hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              博客
            </a>
            <a
              href="/sponsors"
              className="group inline-flex items-center rounded-lg px-3 py-1.5 text-sm transition hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              赞助商
            </a>
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

export function MainNav() {
  return (
    <nav className="flex items-center gap-2 md:gap-3">
      <Link
        href="/docs"
        className="rounded-full px-3 py-1.5 text-sm text-fd-muted-foreground transition hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        文档
      </Link>
      <Link
        href="/blog"
        className="rounded-full px-3 py-1.5 text-sm text-fd-muted-foreground transition hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        博客
      </Link>
      <Link
        href="/sponsors"
        className="rounded-full px-3 py-1.5 text-sm text-fd-muted-foreground transition hover:bg-fd-accent hover:text-fd-accent-foreground"
      >
        赞助商
      </Link>
    </nav>
  );
}