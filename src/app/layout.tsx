import '@/app/global.css'
import 'katex/dist/katex.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { HeroUIProvider } from '@heroui/react'
import { RootProvider } from 'fumadocs-ui/provider'
import type { Translations } from 'fumadocs-ui/i18n'
import { Banner } from 'fumadocs-ui/components/banner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer } from '@/components/footer'

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
  return (
    <html lang="zh" className="font-sans" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Banner id="welcome-banner" variant="rainbow">
          🎉 欢迎来到文档站！探索技术文档与示例代码。
        </Banner>
        <div className="flex flex-1 flex-col">
          <Theme>
            <HeroUIProvider>
              <RootProvider
                i18n={{ locale: 'zh', locales, translations: zh }}
                theme={{ defaultTheme: 'light', attribute: 'class' }}
              >
                <div className="flex-1">{children}</div>
              </RootProvider>
            </HeroUIProvider>
          </Theme>
          <Footer />
        </div>
        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
