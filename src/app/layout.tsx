import './global.css';
import LayoutWrapper from '@/components/LayoutWrapper';
import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import { provider } from '@/lib/i18n';
import PopupModal from '@/components/PopupModal';

export default function Layout({ children }: { children: ReactNode }) {
  // 直接使用默认语言，避免 hydration 不匹配
  const locale = 'zh';

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <RootProvider i18n={provider(locale)}>
          <LayoutWrapper>{children}</LayoutWrapper>
        </RootProvider>
        <PopupModal showOnFirstVisit={true} />
      </body>
    </html>
  );
}
