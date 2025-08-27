import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions, linkItems } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import { Book, ComponentIcon, Heart, Pencil, PlusIcon, Server } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout
      {...baseOptions()}
      style={
        {
          '--spacing-fd-container': '1120px',
        } as object
      }
      links={[
        {
          type: 'menu',
          on: 'menu',
          text: 'Documentation',
          items: [
            {
              text: 'Getting Started',
              url: '/docs/ui',
              icon: <Book />,
            },
            {
              text: 'Components',
              url: '/docs/ui/components',
              icon: <ComponentIcon />,
            },
          ],
        },
        {
          type: 'custom',
          on: 'nav',
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>
                <Link href="/docs/ui">Documentation</Link>
              </NavbarMenuTrigger>
              <NavbarMenuContent className="text-[15px]">
                <NavbarMenuLink href="/docs/ui" className="md:row-span-2">
                  <div className="-mx-3 -mt-3">
                    <Image
                      src={Preview}
                      alt="Perview"
                      className="rounded-t-lg object-cover"
                      style={{
                        maskImage:
                          'linear-gradient(to bottom,white 60%,transparent)',
                      }}
                    />
                  </div>
                  <p className="font-medium">Getting Started</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn to use Fumadocs on your docs site.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/components"
                  className="lg:col-start-2"
                >
                  <ComponentIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Components</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Add interactive experience to your docs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/openapi"
                  className="lg:col-start-2"
                >
                  <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">OpenAPI</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Generate interactive playgrounds and docs for your OpenAPI
                    schema.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/markdown"
                  className="lg:col-start-3 lg:row-start-1"
                >
                  <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Markdown</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Learn the writing format/syntax of Fumadocs.
                  </p>
                </NavbarMenuLink>

                <NavbarMenuLink
                  href="/docs/ui/manual-installation"
                  className="lg:col-start-3 lg:row-start-2"
                >
                  <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md" />
                  <p className="font-medium">Manual Installation</p>
                  <p className="text-fd-muted-foreground text-sm">
                    Setup Fumadocs for your existing Next.js app.
                  </p>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },
        ...linkItems,
      ]}
      className="dark:bg-neutral-950 dark:[--color-fd-background:var(--color-neutral-950)]"
    >
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer() {
  return (
    <footer className="relative mt-auto border-t bg-gradient-to-b from-fd-background to-fd-card overflow-hidden">
      {/* 背景装饰 */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--color-fd-primary), var(--color-fd-primary) 1px, transparent 1px, transparent 20px)'
        }}
      />
      
      {/* 主要内容 */}
      <div className="container relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-8 rounded-lg bg-gradient-to-br from-fd-primary to-fd-primary/80 flex items-center justify-center">
                <span className="text-fd-primary-foreground font-bold text-sm">F</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
                Fumadocs
              </h3>
            </div>
            <p className="text-fd-muted-foreground max-w-md leading-relaxed mb-6">
              为开发者打造的美观文档框架，灵活、高性能，运行在你的 React 框架上。
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/fuma-nama/fumadocs"
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
              <a
                href="https://fuma-dev.vercel.app"
                rel="noreferrer noopener"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
              >
                <Heart className="size-4" />
                Fuma
              </a>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold mb-4 text-fd-foreground">快速链接</h4>
            <ul className="space-y-3">
              <li>
                <a href="/docs/ui" className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  快速开始
                </a>
              </li>
              <li>
                <a href="/docs/ui/components" className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  组件
                </a>
              </li>
              <li>
                <a href="/docs/ui/markdown" className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  Markdown
                </a>
              </li>
              <li>
                <a href="/showcase" className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  赞助商
                </a>
              </li>
            </ul>
          </div>
          
          {/* 社区链接 */}
          <div>
            <h4 className="font-semibold mb-4 text-fd-foreground">社区</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/fuma-nama/fumadocs/discussions" 
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  讨论
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/fuma-nama/fumadocs/issues" 
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  反馈
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  博客
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/H7Nb9XF" 
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 分隔线 */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-fd-border"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-fd-background px-4">
              <div className="size-2 rounded-full bg-fd-primary/20"></div>
            </div>
          </div>
        </div>
        
        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-fd-muted-foreground">
              © 2024 Fumadocs. 保留所有权利。
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-xs text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                使用条款
              </a>
            </div>
          </div>
          
          {/* 版本信息 */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-fd-muted-foreground">Built with</span>
            <span className="text-xs font-mono px-2 py-1 bg-fd-primary/10 text-fd-primary rounded border">
              ❤️ & React
            </span>
          </div>
        </div>
      </div>
      
      {/* 底部装饰渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fd-primary/20 to-transparent"></div>
    </footer>
  );
}
