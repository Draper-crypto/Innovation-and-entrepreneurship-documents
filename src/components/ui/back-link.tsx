"use client";

import { useRouter } from "next/navigation";
import type { MouseEventHandler, ReactNode } from "react";
import { useCallback } from "react";
import { cn } from "@/lib/cn";

interface BackLinkProps {
  children: ReactNode;
  fallbackHref?: string;
  className?: string;
}

/**
 * 返回上一页的按钮，若浏览器历史为空则跳转到备用链接。
 */
export function BackLink({ children, fallbackHref = "/", className }: BackLinkProps) {
  const router = useRouter();

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      event.preventDefault();
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push(fallbackHref);
      }
    },
    [router, fallbackHref]
  );

  return (
    <button type="button" onClick={handleClick} className={cn("inline-flex items-center text-sm text-fd-muted-foreground hover:underline", className)}>
      {children}
    </button>
  );
}