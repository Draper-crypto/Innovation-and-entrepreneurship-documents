"use client";

import type React from "react";

export type Testimonial = {
  id: string;
  content: string;
  author: string;
  role?: string;
  avatar?: string; // 头像 URL
};

// 纯展示滚动评价模块，数据通过 props 传入，便于复用
export function TestimonialsMarquee({
  title = 'Trusted by awesome teams and developers',
  items = [],
  speed = 40,
  subtitle,
}: {
  title?: string;
  items: Testimonial[];
  speed?: number; // 每秒像素
  subtitle?: string;
}) {
  // 估算单轮滚动距离（单份卡片总宽度），用于将 speed(px/s) 转换为时长
  // 注意：动画位移为 -50%，恰好等于一份内容宽度，因此估算即可
  const estimatedCardWidth = 200; // px，移动端 160 / 小屏 200 / 大屏 260，取中间值更稳定
  const gap = 8; // gap-2 = 8px
  const distance = Math.max(1, items.length) * (estimatedCardWidth + gap);
  const durationSec = Math.max(20, Math.min(120, distance / Math.max(1, speed)));
  const trackStyle: React.CSSProperties = {
    // @ts-expect-error: CSS custom property
    '--marquee-duration': `${Math.round(durationSec)}s`,
  };
  const Card = ({ t }: { t: Testimonial }) => (
    <div className="shrink-0 w-[160px] sm:w-[200px] md:w-[260px] rounded-xl border bg-fd-card text-fd-card-foreground p-4 shadow-sm dark:border-white/10">
      <p className="text-sm text-fd-foreground/90">{t.content}</p>
      <div className="mt-4 flex items-center gap-3">
        {t.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={t.avatar}
            alt={t.author}
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-fd-secondary" />
        )}
        <div className="text-xs text-fd-muted-foreground">
          <div className="font-medium text-fd-foreground">{t.author}</div>
          {t.role ? <div>{t.role}</div> : null}
        </div>
      </div>
    </div>
  );

  const duplicated = [...items, ...items];

  return (
    <section className="mx-auto mt-16 max-w-[var(--spacing-fd-container)] px-4 md:px-6">
      {title ? (
        <div className="mx-auto mb-6 max-w-3xl text-center md:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fd-foreground md:text-5xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-fd-muted-foreground md:text-base">{subtitle}</p>
          ) : null}
        </div>
      ) : null}
      <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border p-2 dark:border-white/10">
        <div className="snap-x snap-mandatory overflow-x-auto no-scrollbar">
          <div className="flex w-max gap-2 md:animate-marquee will-change-transform" style={trackStyle}>
            {duplicated.map((t, idx) => (
              <div key={`${t.id}-${idx}`} className="snap-start">
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent dark:from-[rgb(14,14,18)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-[rgb(14,14,18)]" />
      </div>
    </section>
  );
}
