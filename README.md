# 创新创业文档网站

这是一个基于 Fumadocs 构建的现代化文档网站，支持中英文双语展示。

## 项目简介

本项目是一个专业的创新创业知识文档网站，提供丰富的学习资源和示例，包括：

- 📚 完整的创新创业知识体系
- 🌐 中英文双语支持
- 📝 丰富的 Markdown 和 MDX 内容支持
- 📊 Mermaid 图表支持
- 🔍 TypeScript Twoslash 代码高亮
- 🔎 全文搜索功能
- 📱 响应式设计
- 🎯 良好的用户体验

## 技术栈

- **框架**: Next.js 15 (App Router)
- **文档框架**: Fumadocs
- **样式**: Tailwind CSS
- **组件库**: Fumadocs UI
- **图表**: Mermaid
- **代码高亮**: Shiki + Twoslash
- **搜索**: Orama 搜索引擎

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

访问 http://localhost:3000 查看文档网站

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
