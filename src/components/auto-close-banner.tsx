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
  autoCloseDelay = 5000, // 默认5秒
}: AutoCloseBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 检查localStorage中是否已经关闭过这个banner
    const dismissed = localStorage.getItem(`banner-dismissed-${id}`);
    if (dismissed) {
      setIsVisible(false);
      return;
    }

    // 设置自动关闭定时器
    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem(`banner-dismissed-${id}`, 'true');
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [id, autoCloseDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(`banner-dismissed-${id}`, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn('relative', className)}>
      <Banner id={id} variant={variant}>
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