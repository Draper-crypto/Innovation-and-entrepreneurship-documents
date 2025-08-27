![banner](./apps/docs/public/banner.png)

# Fumadocs - 文档网站构建框架

> 基于 Next.js 和 React.js 的现代化文档网站构建框架

📘 **官方文档**: [fumadocs.vercel.app](https://fumadocs.vercel.app)

## 📋 目录

- [🚀 快速开始](#-快速开始)
- [⚙️ 项目配置](#️-项目配置)
- [🎨 样式自定义](#-样式自定义)
- [📄 页面管理](#-页面管理)
- [🔧 配置分离教程](#-配置分离教程)
- [🌓 主题切换](#-主题切换)
- [📱 响应式设计](#-响应式设计)
- [🚀 部署指南](#-部署指南)
- [🤝 贡献指南](#-贡献指南)

## 🚀 快速开始

### 系统要求

- Node.js 18.0 或更高版本
- pnpm 8.0 或更高版本（推荐）
- Git

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/fuma-nama/fumadocs.git
cd fumadocs
```

2. **安装依赖**
```bash
pnpm install
```

3. **启动开发服务器**
```bash
cd apps/docs
npx next dev
```

4. **访问本地服务器**
   打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## ⚙️ 项目配置

### 目录结构

```
fumadocs/
├── apps/
│   └── docs/                 # 主文档网站
│       ├── app/
│       │   ├── (home)/       # 首页相关页面
│       │   │   ├── showcase/ # 赞助商展示页面
│       │   │   └── layout.tsx
│       │   └── layout.tsx
│       ├── components/       # 共享组件
│       ├── lib/             # 工具函数
│       └── public/          # 静态资源
├── packages/                # 核心包
├── examples/                # 示例项目
└── documents/              # 文档资源
```

### 环境变量配置

创建 `.env.local` 文件：

```env
# GitHub Token (可选，用于获取赞助商信息)
GITHUB_TOKEN=your_github_token_here

# 网站基础配置
NEXT_PUBLIC_URL=http://localhost:3000
```

## 🎨 样式自定义

### Tailwind CSS 配置

项目使用 Tailwind CSS 进行样式管理，配置文件位于 `tailwind.config.js`。

### 主题变量

```css
/* 在 app/globals.css 中自定义颜色 */
:root {
  --fd-primary: 210 40% 50%;     /* 主色调 */
  --fd-secondary: 210 40% 70%;   /* 次要色调 */
  --fd-background: 0 0% 100%;    /* 背景色 */
  --fd-foreground: 0 0% 10%;     /* 前景色 */
  --fd-muted: 210 40% 95%;       /* 柔和色 */
  --fd-border: 210 40% 90%;      /* 边框色 */
}

.dark {
  --fd-background: 0 0% 5%;
  --fd-foreground: 0 0% 95%;
  --fd-muted: 210 40% 10%;
  --fd-border: 210 40% 15%;
}
```

## 📄 页面管理

### 添加新页面

1. 在 `app/(home)/` 目录下创建新文件夹
2. 添加 `page.tsx` 文件
3. 在 `lib/layout.shared.tsx` 中更新导航配置

### 页面配置示例

```typescript
// app/(home)/new-page/page.tsx
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: '新页面',
  description: '页面描述',
});

export default function NewPage() {
  return (
    <main className="min-h-screen bg-fd-background">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">新页面</h1>
        <p className="text-fd-muted-foreground">页面内容</p>
      </div>
    </main>
  );
}
```

## 🔧 配置分离教程

### 为什么需要配置分离？

- ✅ **易于维护**: 样式和内容集中管理
- ✅ **提高复用性**: 配置可在多个组件间共享
- ✅ **降低耦合度**: 样式与业务逻辑分离
- ✅ **团队协作**: 设计师可独立修改样式配置

### 实现步骤

#### 1. 创建配置文件

```typescript
// components/config/page.config.ts
export const pageConfig = {
  // 页面基本信息
  meta: {
    title: '页面标题',
    description: '页面描述'
  },
  
  // 样式配置
  styles: {
    container: 'max-w-6xl mx-auto px-6',
    title: 'text-4xl font-bold mb-8 text-fd-foreground',
    description: 'text-lg text-fd-muted-foreground mb-12'
  },
  
  // 布局配置
  layout: {
    spacing: 'py-16',
    grid: 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
  }
};
```

#### 2. 使用配置

```typescript
// components/PageComponent.tsx
import { pageConfig } from './config/page.config';

export function PageComponent() {
  return (
    <div className={`${pageConfig.styles.container} ${pageConfig.layout.spacing}`}>
      <h1 className={pageConfig.styles.title}>
        {pageConfig.meta.title}
      </h1>
      <p className={pageConfig.styles.description}>
        {pageConfig.meta.description}
      </p>
    </div>
  );
}
```

### 赞助商页面配置示例

我们已经为赞助商页面实现了完整的配置分离：

```typescript
// app/(home)/showcase/showcase.config.ts
export const showcaseConfig = {
  page: {
    title: '赞助商展示',
    description: '探索使用 Fumadocs 构建的创新项目...',
    // ...
  },
  card: {
    baseClass: 'group relative overflow-hidden rounded-2xl border...',
    // ...
  },
  // 更多配置...
};
```

详细配置说明请参考：[Showcase 配置文档](./apps/docs/app/(home)/showcase/README.md)

## 🌓 主题切换

### 自动主题检测

```typescript
// lib/theme.ts
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme as 'light' | 'dark' || systemTheme);
  }, []);
  
  return { theme, setTheme };
}
```

### 主题切换按钮

```typescript
// components/ThemeToggle.tsx
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg bg-fd-muted hover:bg-fd-muted/80 transition-colors"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

## 📱 响应式设计

### 断点配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',   // 手机横屏
      'md': '768px',   // 平板
      'lg': '1024px',  // 笔记本
      'xl': '1280px',  // 桌面端
      '2xl': '1536px'  // 大屏幕
    }
  }
}
```

### 响应式组件示例

```typescript
// 响应式网格布局
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {items.map((item) => (
    <div key={item.id} className="p-4 rounded-lg bg-fd-card">
      {/* 卡片内容 */}
    </div>
  ))}
</div>
```

## 🚀 部署指南

### Vercel 部署（推荐）

1. **连接 GitHub 仓库**
   - 访问 [vercel.com](https://vercel.com)
   - 连接你的 GitHub 账户
   - 选择 fumadocs 仓库

2. **配置部署设置**
   ```json
   {
     "buildCommand": "cd apps/docs && npm run build",
     "outputDirectory": "apps/docs/.next",
     "installCommand": "pnpm install"
   }
   ```

3. **环境变量配置**
   在 Vercel 面板中添加：
   ```
   GITHUB_TOKEN=your_production_token
   NEXT_PUBLIC_URL=https://your-domain.com
   ```

### 其他部署选项

#### Netlify
```bash
# 构建命令
pnpm build

# 发布目录
apps/docs/out
```

#### Docker 部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

## 🛠️ 开发工具

### 推荐的 VS Code 扩展

```json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint"
  ]
}
```

### 代码格式化配置

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "([\"'`][^\"'`]*[\"'`])"],
    ["cva\\(([^)]*)\\)", "([\"'`][^\"'`]*[\"'`])"]
  ]
}
```

### 调试配置

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "cwd": "${workspaceFolder}/apps/docs"
    }
  ]
}
```

## 🔍 故障排除

### 常见问题

#### 1. 构建失败
```bash
# 清除缓存
rm -rf node_modules/.cache
rm -rf .next
pnpm install
```

#### 2. 样式不生效
- 检查 Tailwind CSS 配置
- 确认类名拼写正确
- 验证 PostCSS 配置

#### 3. 图片不显示
- 检查图片路径
- 验证 `next.config.js` 中的图片配置
- 确认静态资源在 `public/` 目录下

#### 4. 类型错误
```bash
# 重新生成类型文件
pnpm run type-check
```

### 性能优化

#### 图片优化
```typescript
// 使用 Next.js Image 组件
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="描述"
  width={800}
  height={600}
  priority // 关键图片
  placeholder="blur" // 加载占位符
/>
```

#### 代码分割
```typescript
// 动态导入
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>加载中...</div>,
});
```

## 📚 进阶教程

### 自定义 MDX 组件

```typescript
// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-8 text-fd-foreground">
        {children}
      </h1>
    ),
    ...components,
  };
}
```

### 国际化支持

```typescript
// lib/i18n.ts
export const i18n = {
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  messages: {
    zh: {
      'nav.home': '首页',
      'nav.docs': '文档'
    },
    en: {
      'nav.home': 'Home',
      'nav.docs': 'Docs'
    }
  }
};
```

## 兼容性

所有包都是 **ESM 模块**，确保你的环境支持：

- Node.js 18.0+
- Modern browsers (ES2020+)
- Next.js 13.0+

## 📱 贴纸

![logo](./documents/logo.png)

欢迎打印出来贴在你的设备上！ :D

## 🤝 贡献指南

感谢你对 Fumadocs 的贡献兴趣！

### 贡献流程

1. **Fork 项目**
2. **创建功能分支**: `git checkout -b feature/amazing-feature`
3. **提交更改**: `git commit -m 'Add some amazing feature'`
4. **推送分支**: `git push origin feature/amazing-feature`
5. **创建 Pull Request**

### 开发规范

- 遵循现有的代码风格
- 添加适当的测试
- 更新相关文档
- 确保所有检查通过

详细指南请查看：[贡献指南](/.github/contributing.md)

### 社区

- 💬 [GitHub Discussions](https://github.com/fuma-nama/fumadocs/discussions)
- 🐛 [问题反馈](https://github.com/fuma-nama/fumadocs/issues)
- 📖 [官方文档](https://fumadocs.vercel.app)

---

**Made with ❤️ by the Fumadocs team**
