export const homeConfig = {
  hero: {
    badge: '全新上线',
    title: ['给灵感赋能', '让想法落地'],
    subtitle: '专为比赛打造的实战型指南，从构想到落地，全流程助力。',
    primary: { label: '立即体验', href: '/docs' },
    secondary: { label: 'GitHub', href: 'https://github.com', external: true },
    image: {
      src: '/images/banner/banner.svg',
      alt: '产品预览',
    },
  },
  features: [
    {
      title: '实战指南',
      desc: '覆盖市场分析、产品开发、融资等关键环节，提供从零到一的落地方法。',
    },
    {
      title: '资源对接',
      desc: '链接行业专家、投资人和合作伙伴，为项目注入关键资源。',
    },
    {
      title: '社区支持',
      desc: '加入活跃的创业者社区，交流经验、分享见解、共同成长。',
    },
    {
      title: '极速部署',
      desc: '内置最佳实践与脚手架，分钟级完成搭建与发布。',
    },
    {
      title: '分析洞察',
      desc: '追踪增长指标与用户行为，指导产品迭代与优化。',
    },
    {
      title: '高度可定制',
      desc: '易扩展的模块化架构，满足不同业务形态。',
    },
  ],
} as const;

export type HomeConfig = typeof homeConfig;

