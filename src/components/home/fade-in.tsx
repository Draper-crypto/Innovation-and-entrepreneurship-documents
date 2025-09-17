'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * A lightweight fade-in wrapper driven by IntersectionObserver.
 * Keeps client-side runtime small compared to full animation libraries.
 */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        el.style.transitionDelay = `${delay}s`;
        el.classList.add('opacity-100', 'translate-y-0');
        observer.disconnect();
      },
      { rootMargin: '-100px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-4 transition-all duration-500 ease-out will-change-transform',
        className
      )}
    >
      {children}
    </div>
  );
}
