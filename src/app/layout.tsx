import '@/app/global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';
import { Inter } from 'next/font/google';
import { Banner } from 'fumadocs-ui/components/banner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
});

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
    <html lang="zh" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Banner id="welcome-banner" variant="rainbow">
          🎉 欢迎来到文档站！探索技术文档与示例代码。
        </Banner>
        <RootProvider
          i18n={{ locale: 'zh', locales, translations: zh }}
          theme={{ defaultTheme: 'light', attribute: 'class' }}
        >
          {children}
        </RootProvider>
        {/* Vercel Analytics & Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
