// Showcase page configuration
export const showcaseConfig = {
  // 页面基本信息
  page: {
    title: '赞助商展示',
    description: '探索使用 Fumadocs 构建的创新项目。从独立开发者到企业级应用，见证技术的无限可能。',
    badge: '精选优质项目',
    cta: {
      text: '提交你的项目',
      url: 'https://github.com/fuma-nama/fumadocs/discussions/30',
      description: '免费展示你的作品'
    }
  },

  // 卡片样式配置
  card: {
    // 基础样式
    baseClass: 'group relative overflow-hidden rounded-2xl border bg-fd-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
    
    // 图片区域
    image: {
      aspectRatio: 'aspect-[16/10]',
      backgroundClass: 'bg-fd-muted/5',
      hoverScale: 'group-hover:scale-105',
      transitionDuration: 'transition-transform duration-300'
    },

    // 内容区域
    content: {
      padding: 'p-5',
      titleClass: 'text-lg font-semibold text-fd-foreground mb-2 line-clamp-1',
      descriptionClass: 'text-sm text-fd-muted-foreground mb-4',
      linkClass: 'inline-flex items-center gap-2 text-sm font-medium text-fd-foreground hover:text-fd-primary transition-colors'
    },

    // 无图片状态
    placeholder: {
      containerClass: 'flex items-center justify-center h-full bg-fd-muted/5',
      iconContainerClass: 'size-12 mx-auto mb-3 rounded-xl bg-fd-muted/10 flex items-center justify-center',
      iconClass: 'size-6 text-fd-muted-foreground',
      textClass: 'text-sm text-fd-muted-foreground'
    }
  },

  // 网格布局配置
  grid: {
    containerClass: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
    sectionSpacing: 'mb-20'
  },

  // 分节配置
  sections: {
    main: {
      title: '精选项目',
      dividerClass: 'h-px flex-1 bg-gradient-to-r from-transparent to-fd-border',
      titleClass: 'text-lg font-semibold text-fd-muted-foreground px-4'
    },
    blog: {
      title: '博客与个人网站',
      description: 'Fumadocs 同样为个人博客和内容网站提供了出色的支持，让创作者能够专注于内容创作而非技术实现。',
      iconClass: 'size-5 text-fd-primary'
    }
  },

  // Vercel 合作区域配置
  vercel: {
    containerClass: 'relative overflow-hidden rounded-3xl border bg-gradient-to-br from-fd-card/80 to-fd-card/40 backdrop-blur-sm p-8 lg:p-12',
    badge: {
      text: '企业级合作伙伴',
      class: 'inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-fd-primary/10 text-fd-primary text-sm font-medium'
    },
    title: 'Fumadocs 为 Vercel 开源 SDK 提供文档支持',
    description: '这些项目展示了 Fumadocs 在企业级开源项目中的强大能力，为数百万开发者提供优质的文档体验。',
    linkClass: 'inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-fd-background/80 backdrop-blur-sm hover:bg-fd-background hover:shadow-lg transition-all duration-200 font-medium text-sm hover:-translate-y-0.5'
  },

  // 统计信息配置
  stats: {
    title: '加入不断壮大的 Fumadocs 社区',
    containerClass: 'grid grid-cols-2 lg:grid-cols-4 gap-8',
    itemClass: 'space-y-2',
    numberClass: 'text-3xl font-black text-fd-primary',
    labelClass: 'text-sm text-fd-muted-foreground'
  },

  // 文本内容
  text: {
    defaultDescription: '发现欧洲大科技公司的替代方案',
    visitPrefix: '访问',
    statLabels: {
      projects: '精选项目',
      blogs: '博客网站', 
      enterprise: '企业合作',
      opensource: '开源免费'
    }
  }
};

// 样式工具函数
export const getCardClasses = () => showcaseConfig.card;
export const getGridClasses = () => showcaseConfig.grid;
export const getSectionClasses = () => showcaseConfig.sections;