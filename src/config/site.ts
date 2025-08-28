export const siteConfig = {
  name: 'ElexvxAI Lab',
  description: '构建真实的移动应用程序与创新实践。',
  links: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    rss: '/rss.xml',
  },
  footer: {
    product: [
      { label: '文档', href: '/docs' },
      { label: '定价', href: '/pricing' },
      { label: '常见问题', href: '/faq' },
    ],
    community: [
      { label: '推特', href: 'https://twitter.com', external: true },
      { label: '邮箱', href: 'mailto:support@example.com' },
    ],
    legal: [
      { label: '条款', href: '/terms' },
      { label: '隐私', href: '/privacy' },
      { label: '许可', href: '/licenses' },
    ],
    copy: `版权所有 © ${new Date().getFullYear()} ElexvxAI Lab. 保留所有权利`,
  },
} as const;

export type SiteConfig = typeof siteConfig;

