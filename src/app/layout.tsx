import '@/app/global.css';
import 'katex/dist/katex.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { HeroUIProvider } from '@heroui/react';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';
import { Banner } from 'fumadocs-ui/components/banner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const zh: Partial<Translations> = {
  search: '搜索',
  toc: '目录',
};

const locales = [
  { name: '中文', locale: 'zh' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="zh" className="font-sans" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner id="welcome-banner" variant="rainbow">
          🎉 欢迎来到文档站！探索技术文档与示例代码。
        </Banner>
        <Theme>
          <HeroUIProvider>
            <RootProvider
              i18n={{ locale: 'zh', locales, translations: zh }}
              theme={{ defaultTheme: 'light', attribute: 'class' }}
            >
              {children}
            </RootProvider>
          </HeroUIProvider>
        </Theme>
        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
