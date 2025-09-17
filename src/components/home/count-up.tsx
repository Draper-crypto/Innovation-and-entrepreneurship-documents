'use client';

import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: string | number;
  duration?: number;
  delay?: number;
}

/**
 * Minimal count-up animation that only runs when visible.
 * Keeps bundle size small compared to external libraries.
 */
export function CountUp({ value, duration = 1.6, delay = 0 }: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const raw = typeof value === 'number' ? String(value) : value;
    const end = Number((raw || '0').toString().replace(/[^\d.]/g, '')) || 0;

    let animationFrame = 0;
    let start = -1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const durationMs = Math.max(0, duration) * 1000;
        const delayMs = Math.max(0, delay) * 1000;

        const step = (timestamp: number) => {
          if (start < 0) start = timestamp + delayMs;

          if (timestamp < start) {
            animationFrame = requestAnimationFrame(step);
            return;
          }

          const progress = durationMs === 0 ? 1 : Math.min(1, (timestamp - start) / durationMs);
          const current = Math.round(end * progress);
          el.textContent = current.toLocaleString();

          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };

        animationFrame = requestAnimationFrame(step);
      },
      { rootMargin: '-100px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value, duration, delay]);

  return <span ref={spanRef} aria-label={String(value)} />;
}
