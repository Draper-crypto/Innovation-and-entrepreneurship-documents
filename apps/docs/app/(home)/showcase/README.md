# Showcase 页面配置说明

## 概述

为了便于维护和修改，Showcase 页面的样式和内容已经分离到独立的配置文件中。所有的样式类名、文本内容和布局参数都集中在 `showcase.config.ts` 文件中管理。

## 文件结构

```
showcase/
├── page.tsx           # 主页面组件
├── showcase.config.ts # 配置文件
└── README.md         # 本说明文档
```

## 配置文件结构

### 1. 页面基本信息 (`page`)
```typescript
page: {
  title: '赞助商展示',              // 页面标题
  description: '...',              // 页面描述
  badge: '精选优质项目',            // 顶部徽章文本
  cta: {                          // 行动按钮
    text: '提交你的项目',
    url: 'https://...',
    description: '免费展示你的作品'
  }
}
```

### 2. 卡片样式配置 (`card`)
```typescript
card: {
  baseClass: '...',               // 卡片基础样式
  image: {                        // 图片区域样式
    aspectRatio: 'aspect-[16/10]',
    backgroundClass: 'bg-fd-muted/5',
    hoverScale: 'group-hover:scale-105',
    transitionDuration: 'transition-transform duration-300'
  },
  content: {                      // 内容区域样式
    padding: 'p-5',
    titleClass: '...',
    descriptionClass: '...',
    linkClass: '...'
  },
  placeholder: {                  // 无图片时的占位符样式
    containerClass: '...',
    iconContainerClass: '...',
    iconClass: '...',
    textClass: '...'
  }
}
```

### 3. 网格布局配置 (`grid`)
```typescript
grid: {
  containerClass: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  sectionSpacing: 'mb-20'
}
```

### 4. 文本内容配置 (`text`)
```typescript
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
```

## 常见修改场景

### 1. 修改卡片样式
要修改卡片的外观，编辑 `showcase.config.ts` 中的 `card` 配置：

```typescript
// 修改卡片圆角
card: {
  baseClass: 'group relative overflow-hidden rounded-xl border bg-fd-card ...',
  // 其他配置...
}

// 修改图片比例
card: {
  image: {
    aspectRatio: 'aspect-[4/3]', // 改为 4:3 比例
    // 其他配置...
  }
}
```

### 2. 修改文本内容
要修改页面文本，编辑 `text` 配置：

```typescript
text: {
  defaultDescription: '您的自定义描述文本',
  visitPrefix: '查看',
  // 其他配置...
}
```

### 3. 修改网格布局
要改变项目展示的网格布局：

```typescript
grid: {
  containerClass: 'grid gap-8 sm:grid-cols-1 lg:grid-cols-2', // 改为两列
  sectionSpacing: 'mb-16' // 减少间距
}
```

### 4. 修改页面标题和描述
```typescript
page: {
  title: '项目展示',
  description: '您的自定义页面描述',
  // 其他配置...
}
```

### 5. 修改统计信息
```typescript
text: {
  statLabels: {
    projects: '优秀项目',
    blogs: '社区博客',
    enterprise: '商业合作',
    opensource: '完全开源'
  }
}
```

## 工具函数

配置文件还提供了工具函数，方便在其他地方使用：

```typescript
import { getCardClasses, getGridClasses, getSectionClasses } from './showcase.config';

// 获取卡片样式配置
const cardStyles = getCardClasses();

// 获取网格样式配置  
const gridStyles = getGridClasses();

// 获取分节样式配置
const sectionStyles = getSectionClasses();
```

## 最佳实践

1. **保持样式一致性**: 修改样式时，确保使用 Fumadocs 的设计系统颜色变量（如 `fd-primary`, `fd-background` 等）

2. **响应式设计**: 网格布局应包含响应式类名（如 `sm:grid-cols-2 lg:grid-cols-3`）

3. **可访问性**: 修改交互效果时，保持适当的过渡动画和焦点状态

4. **测试修改**: 修改配置后，确保在不同屏幕尺寸和主题模式下测试效果

## 注意事项

- 修改配置文件后，页面会自动热重载
- 所有 CSS 类名都应符合 Tailwind CSS 规范
- 保持日夜模式兼容性，避免使用硬编码颜色
- 大型修改前建议备份配置文件