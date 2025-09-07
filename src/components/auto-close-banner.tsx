'use client';

import { useState, useEffect } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
import { cn } from '@/lib/cn';
import type { ComponentProps } from 'react';

interface AutoCloseBannerProps {
  id: string;
  variant?: any;
  className?: string;
  children: React.ReactNode;
  autoCloseDelay?: number; // 自动关闭延迟时间（毫秒）
}

export function AutoCloseBanner({
  id,
  variant,
  className,
  children,
  autoCloseDelay = 10000, // 默认 10 秒
}: AutoCloseBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 仅在首页显示（避免文档页等重复出现）
    if (typeof window === 'undefined') return;
    const isHome = window.location.pathname === '/';
    const storageKey = `autoCloseBanner:${id}:closed`;

    if (!isHome) {
      setIsVisible(false);
      return;
    }

    // 如果已关闭过（包括自动关闭或手动关闭），则不再显示
    try {
      const closed = window.localStorage.getItem(storageKey) === '1';
      if (closed) {
        setIsVisible(false);
        return;
      }
    } catch {}

    // 首次或未关闭过：显示并在 delay 到期后自动关闭且持久化
    setIsVisible(true);
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      try {
        window.localStorage.setItem(storageKey, '1');
      } catch {}
    }, autoCloseDelay);

    return () => window.clearTimeout(timer);
  }, [id, autoCloseDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(`autoCloseBanner:${id}:closed`, '1');
      } catch {}
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn('relative', className)}>
      <Banner id={id} variant={variant as ComponentProps<typeof Banner>['variant']}> 
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">{children}</div>
          <button
            onClick={handleDismiss}
            className="ml-4 text-current opacity-70 hover:opacity-100 transition-opacity"
            aria-label="关闭横幅"
          >
            ✕
          </button>
        </div>
      </Banner>
    </div>
  );
}