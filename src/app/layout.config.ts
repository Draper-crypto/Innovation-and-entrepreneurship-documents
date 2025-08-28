import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { IconBrandTabler } from '@tabler/icons-react';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'ElexvxAI Lab',
  },
  links: [
    {
      text: '文档',
      url: '/innovation',
    },
    {
      text: '博客',
      url: '/blog',
    },
    {
      text: '赞助商',
      url: '/sponsors',
    },
  ],
};