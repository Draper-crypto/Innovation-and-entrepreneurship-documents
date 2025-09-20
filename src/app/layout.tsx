import '@/app/global.css'
// 移除全局 KaTeX 与 Radix 样式，按需在子路由加载可降低首屏阻塞
// import 'katex/dist/katex.css'
// import '@radix-ui/themes/styles.css'
import { RootProvider } from 'fumadocs-ui/provider'
import type { Translations } from 'fumadocs-ui/i18n'
import type { Metadata } from 'next'
import type React from 'react'
import { AutoCloseBanner } from '@/components/auto-close-banner'
import { BackToHomeButton } from '@/components/ui/back-to-home'
import { ClientMetrics } from '@/components/client-metrics'
import { ConditionalFooter } from '@/components/conditional-footer'
import { siteMetadata, absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: {
    default: siteMetadata.title,
    template: '%s | ElexvxAI Lab',
  },
  description: siteMetadata.description,
  keywords: ['ElexvxAI Lab', '创新创业', '多模态智能', '创业投资', '资产管理'],
  authors: [{ name: siteMetadata.name }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.baseUrl,
    siteName: siteMetadata.shortName,
    locale: siteMetadata.locale,
    images: [
      {
        url: absoluteUrl(siteMetadata.defaultOgImage),
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.socials.twitter,
    images: [absoluteUrl(siteMetadata.defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
  },
}

const zh: Partial<Translations> = {
  search: '搜索',
  toc: '目录',
}

const locales = [
  { name: '中文', locale: 'zh' },
]

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const isProd = process.env.NODE_ENV === 'production'
  const isVercel = process.env.VERCEL === '1'
  const enableMetrics = isProd && isVercel

  return (
    <html lang='zh' className='font-sans' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col'>
        <AutoCloseBanner 
          id='welcome-banner' 
          variant='rainbow' 
          className='sticky top-0 z-50'
          autoCloseDelay={10000}
        >
          🎉 欢迎访问 ElexvxAI Lab ！我们是一家专注于LLM模型、创新创业比赛、创业投资的研究机构。
        </AutoCloseBanner>
        <div className='flex flex-1 flex-col'>
          {/* 移除未使用的 Radix Theme 与 HeroUIProvider，减少 hydration 与样式注入 */}
          <RootProvider
            i18n={{ locale: 'zh', locales, translations: zh }}
            theme={{ defaultTheme: 'light', attribute: 'class' }}
          >
            <div className='flex-1'>{children}</div>
            <BackToHomeButton />
          </RootProvider>
        </div>
        {/* 条件渲染footer：只在非文档页面显示 */}
        <ConditionalFooter />
        {/* 客户端指标脚本：仅在 Vercel 生产环境注入，避免本地/_vercel 脚本错误 */}
        {enableMetrics ? <ClientMetrics /> : null}
      </body>
    </html>
  )
}