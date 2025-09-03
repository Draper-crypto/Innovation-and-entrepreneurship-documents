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
    // 设置自动关闭定时器，每次页面加载都显示指定时间
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [autoCloseDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
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