'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showFooter = !pathname.startsWith('/docs');

  return (
    <>
      <div className="flex-1">{children}</div>
      {showFooter && <Footer />}
    </>
  );
}