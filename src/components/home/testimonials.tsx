"use client";
import { useEffect, useRef } from 'react';

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
}: {
  title?: string;
  items: Testimonial[];
  speed?: number; // 每秒像素
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let start: number | null = null;
    let rafId: number | null = null;
    const totalWidth = el.scrollWidth / 2; // 我们会复制两份，实现循环

    const step = (ts: number) => {
      if (start == null) start = ts;
      const elapsed = ts - start;
      const x = (elapsed / 1000) * speed; // 像素
      const offset = x % totalWidth;
      el.style.transform = `translateX(-${offset}px)`;
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  const Card = ({ t }: { t: Testimonial }) => (
    <div className="shrink-0 w-[360px] rounded-xl border bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <p className="text-sm text-gray-700 dark:text-gray-200">{t.content}</p>
      <div className="mt-4 flex items-center gap-3">
        {t.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.avatar} alt={t.author} className="h-8 w-8 rounded-full object-cover" />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-white/10" />
        )}
        <div className="text-xs text-gray-600 dark:text-gray-300">
          <div className="font-medium text-gray-900 dark:text-gray-100">{t.author}</div>
          {t.role ? <div>{t.role}</div> : null}
        </div>
      </div>
    </div>
  );

  const duplicated = [...items, ...items];

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-black/10 p-4 dark:border-white/10">
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ transform: 'translateX(0)' }}
        >
          {duplicated.map((t, idx) => (
            <Card key={`${t.id}-${idx}`} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-[rgb(14,14,18)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-[rgb(14,14,18)]" />
      </div>
    </section>
  );
}