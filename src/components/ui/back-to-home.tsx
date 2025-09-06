"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * 全局返回顶部按钮（所有页面显示）
 * - 页面未滚动或页面高度不足一屏时隐藏；向下滚动时显示。
 * - 点击后平滑滚动至页面顶部。
 * - 样式沿用全局 .back-home-container/.button 规则。
 */
export function BackToHomeButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight > window.innerHeight + 1; // 页面可滚动时才可能显示
      const scrolledDown = window.scrollY > 10; // 稍微向下滚动即显示
      setVisible(scrollable && scrolledDown);
    };

    // 初始计算 + 监听滚动和窗口尺寸变化
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={cn("back-home-container", !visible && "is-hidden")} role="region" aria-label="Back To Top">
      <button type="button" aria-label="返回顶部" className="button" onClick={handleClick}>
        <svg className="svgIcon" viewBox="0 0 384 512" aria-hidden="true" focusable="false">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </div>
  );
}