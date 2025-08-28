import '@/app/global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Banner } from 'fumadocs-ui/components/banner';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LayoutWrapper from '@/components/LayoutWrapper';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: '创新创业工作坊',
          url: '/rss.xml',
        },
      ],
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Banner id="update-banner" variant="rainbow">
            网站还在更新中
          </Banner>
          <LayoutWrapper>{children}</LayoutWrapper>
        </RootProvider>
      </body>
    </html>
  );
}
