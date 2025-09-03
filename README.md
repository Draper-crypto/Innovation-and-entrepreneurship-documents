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

## 文档自动化与目录管理指南

本项目已内置自动生成侧边栏与 meta.json 的脚本，减少手工维护成本。

- 常用脚本：
  - 生成/更新目录与类型：
    - npm run prepare:docs（推荐，一次性执行：生成/更新 meta.json → 生成 .source）
    - npm run meta（仅更新 meta.json，不生成 .source）
  - 开发：
    - npm run dev（如果已有开发服务器在运行，请勿重复启动。建议复用现有终端）
  - 构建自检：
    - npm run build（每次提交前建议执行一次，确保无错误）

- 约定与规则（generate-meta.mjs）：
  - 目录扫描范围：content/docs
  - 排序：支持数字前缀（如 01-、02_、003.），仅用于排序，不影响最终页面路径
  - pages 生成：
    1) 若存在 index.mdx，会被排在当前目录的第一项
    2) 先列出包含 MDX 的子目录，再列出同级 MDX 文件
  - 标题：优先读取 index.mdx 的 frontmatter title，否则使用目录名
  - 根目录 meta.json：自动更新 pages 为含 MDX 的一级子目录

- 推荐工作流：
  1) 在 content/docs 下新增、移动或重命名 MDX/目录
  2) 运行 npm run prepare:docs 同步侧边栏与类型
  3) 若在本地预览，确认已有 dev 服务器在运行；否则再执行 npm run dev
  4) 提交前运行 npm run build 确认通过

- 常见问题：
  - MODULE_NOT_FOUND: Cannot find module '@/\.source'：
    - 运行 npm run prepare:docs 或执行 fumadocs-mdx 生成 .source
    - 若依赖安装被跳过，重新执行 npm install 触发 postinstall

- 命名建议：
  - 使用“数字前缀-中文标题.mdx”的格式，例如 01-摘要.mdx、02-产品与方案.mdx，便于排序与阅读

更多脚本细节见 scripts/generate-meta.mjs。
