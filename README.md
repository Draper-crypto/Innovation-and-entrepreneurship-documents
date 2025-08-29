# Elexvx Lab Documentation

基于 Fumadocs 构建的现代化文档网站，支持 TypeScript Twoslash 实时类型检查和代码高亮。

## 功能特性

- 📚 **现代化文档框架**: 基于 Fumadocs 构建，提供优秀的文档体验
- 🔍 **智能代码提示**: 集成 TypeScript Twoslash，支持实时类型检查
- 📊 **数学公式支持**: 内置 KaTeX 数学公式渲染
- 📈 **图表可视化**: 支持 Mermaid 图表和流程图
- 🎯 **全文搜索**: 内置文档搜索功能
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🌙 **深色模式**: 支持自动切换的深色主题

## 技术栈

- **框架**: Next.js 15.5.0
- **文档引擎**: Fumadocs
- **样式**: Tailwind CSS 4.1.12
- **代码高亮**: Shiki + Twoslash
- **数学公式**: KaTeX
- **图表**: Mermaid

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
