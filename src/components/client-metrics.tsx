'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';

// 动态按需加载 Analytics，避免进入 SSR 流程与首屏同步加载
const AnalyticsLazy = dynamic(
  () => import('@vercel/analytics/react').then((m) => m.Analytics),
  { ssr: false }
);

export function ClientMetrics() {
  // 仅对 Analytics 做空闲态延迟，SpeedInsights 需尽早挂载以捕获首屏指标
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onIdle = () => setReady(true);
    const w: any = typeof window !== 'undefined' ? (window as any) : undefined;

    if (w && typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(onIdle, { timeout: 2500 });
      return;
    }

    const t = window.setTimeout(onIdle, 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* SpeedInsights 需尽早注入以捕获 LCP/CLS 等关键指标 */}
      <SpeedInsights />
      {ready ? <AnalyticsLazy /> : null}
    </>
  );
}