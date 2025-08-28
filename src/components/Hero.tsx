'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { homeConfig } from '@/config/home';

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const img = el.querySelector<HTMLElement>('.hero-img');
    if (!img) return;

    const start = -35; // initial translateY(%), show about half
    const end = 0; // fully revealed

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      // progress from 0 to 1 as the section scrolls out of view
      const max = 360; // scroll distance to reveal
      const y = Math.min(Math.max(-rect.top, 0), max);
      const p = y / max;
      const t = start + (end - start) * p;
      img.style.transform = `translateY(${t}%)`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const h = homeConfig.hero;

  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-16 pb-10">
      <div className="relative z-10 w-full mb-10 px-6">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-blue-400/30 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{h.badge}</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.1]">
          {h.title[0]}
          <br />
          {h.title[1]}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {h.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={h.primary.href}
            className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {h.primary.label}
          </Link>
          <Link
            href={h.secondary.href}
            target={h.secondary.external ? '_blank' : undefined}
            className="relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            {h.secondary.label}
          </Link>
        </div>
      </div>

      {/* Pull-to-reveal image */}
      <div ref={wrapperRef} className="w-full max-w-[min(1200px,var(--fd-layout-width))] px-6">
        <div className="hero-visual mx-auto w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl border border-fd-border bg-fd-card">
          <Image
            src={h.image.src}
            alt={h.image.alt}
            width={2417}
            height={1847}
            priority
            className="hero-img w-full h-[140%] object-cover object-top translate-y-[-35%]"
          />
        </div>
      </div>
    </section>
  );
}

