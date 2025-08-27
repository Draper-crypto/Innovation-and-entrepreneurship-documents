import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata = createMetadata({
  title: {
    template: '%s | Fumadocs',
    default: 'Fumadocs',
  },
  description: '用于构建文档站点的 Next.js 框架',
  metadataBase: baseUrl,
});

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="zh-CN"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  );
}
