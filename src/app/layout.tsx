import '@/app/global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';
import { Inter } from 'next/font/google';
import { Banner } from 'fumadocs-ui/components/banner';

const inter = Inter({
  subsets: ['latin'],
});

const zh: Partial<Translations> = {
  search: '搜索',
  toc: '本页内容',
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
          🎉 欢迎来到 Elexvx Lab 文档站！探索我们的技术文档和示例代码。
        </Banner>
        <RootProvider i18n={{ locale: 'zh', locales, translations: zh }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
