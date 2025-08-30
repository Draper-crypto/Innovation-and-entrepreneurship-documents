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

    // 遵循系统“减少动态效果”设置
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) return;

    let animation: Animation | null = null;
    let rafId: number | null = null;

    const startFallbackRAF = (totalWidth: number) => {
      // Fallback: requestAnimationFrame（旧浏览器）
      let start: number | null = null;
      const loop = (ts: number) => {
        if (start == null) start = ts;
        const elapsed = ts - start;
        const x = (elapsed / 1000) * speed;
        const offset = x % totalWidth;
        el.style.transform = `translate3d(-${offset}px,0,0)`;
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    const setup = () => {
      // 重置并测量（含两份内容）
      el.style.transform = 'translate3d(0,0,0)';
      const totalWidth = el.scrollWidth / 2;
      const duration = Math.max(1000, (totalWidth / speed) * 1000);

      // 优先使用 Web Animations API，能在合成线程上运行，移动端更流畅
      if ('animate' in el) {
        animation?.cancel();
        if (rafId) cancelAnimationFrame(rafId);
        animation = el.animate(
          [
            { transform: 'translate3d(0,0,0)' },
            { transform: `translate3d(-${totalWidth}px,0,0)` },
          ],
          {
            duration,
            iterations: Infinity,
            easing: 'linear',
          },
        );
      } else {
        // 退化为 rAF
        if (animation) animation.cancel();
        if (rafId) cancelAnimationFrame(rafId);
        startFallbackRAF(totalWidth);
      }
    };

    // 监听容器尺寸变化与图片加载，防止图片加载后宽度变化导致的跳变和卡顿
    const ro = new ResizeObserver(() => setup());
    ro.observe(el);

    const imgs = Array.from(el.querySelectorAll('img')) as HTMLImageElement[];
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', setup, { once: true });
      img.addEventListener('error', setup, { once: true });
    });

    setup();

    return () => {
      animation?.cancel();
      if (rafId) cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [speed]);

  const Card = ({ t }: { t: Testimonial }) => (
    <div className="shrink-0 w-[360px] rounded-xl border bg-fd-card text-fd-card-foreground p-4 shadow-sm dark:border-white/10">
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
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-semibold tracking-tight text-fd-foreground">{title}</h3>
      </div>
      <div className="relative overflow-hidden rounded-2xl border p-4 dark:border-white/10">
        <div
          ref={trackRef}
          className="flex gap-4"
          style={{ transform: 'translate3d(0,0,0)', willChange: 'transform' }}
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