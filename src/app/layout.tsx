import '@/app/global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';

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
          <div className="flex-1">{children}</div>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
