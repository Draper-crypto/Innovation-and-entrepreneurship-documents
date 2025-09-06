"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// 动态按需加载，避免进入 SSR 流程与首屏同步加载
const AnalyticsLazy = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false }
);
const SpeedInsightsLazy = dynamic(
  () => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights),
  { ssr: false }
);

export function ClientMetrics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onIdle = () => setReady(true);
    const w: any = typeof window !== "undefined" ? (window as any) : undefined;

    if (w && typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(onIdle, { timeout: 2500 });
      return;
    }

    const t = window.setTimeout(onIdle, 1500);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return null;

  return (
    <>
      <AnalyticsLazy />
      <SpeedInsightsLazy />
    </>
  );
}