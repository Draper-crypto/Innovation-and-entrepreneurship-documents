"use client";
import * as React from "react";
import { cn } from "@/lib/cn";

type TabsContextValue = {
  value: string;
  setValue: (v: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({
  defaultValue,
  value: valueProp,
  onValueChange,
  className,
  children,
  ...props
}: TabsProps) {
  const [uncontrolled, setUncontrolled] = React.useState<string>(defaultValue ?? "");
  const isControlled = valueProp !== undefined;
  const value = isControlled ? (valueProp as string) : uncontrolled;

  const setValue = React.useCallback(
    (v: string) => {
      if (!isControlled) setUncontrolled(v);
      onValueChange?.(v);
    },
    [isControlled, onValueChange]
  );

  // 初始化：若默认值没给，自动设置为第一个 Trigger 的值（在 TabsList 中处理）

  return (
    <div className={cn("w-full", className)} {...props}>
      <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>
    </div>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TabsList({ className, children, ...props }: TabsListProps) {
  // 自动初始化：若外层未设置默认值，则尝试用第一个 Trigger 的 value
  const ref = React.useRef<HTMLDivElement>(null);
  const ctx = React.useContext(TabsContext);

  React.useEffect(() => {
    if (!ctx) return;
    if (ctx.value) return;
    const el = ref.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-tabs-trigger]");
    const v = first?.getAttribute("data-value");
    if (v) ctx.setValue(v);
  }, [ctx]);

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 rounded-fd-lg bg-fd-muted p-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;
  const active = ctx.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      data-tabs-trigger
      data-value={value}
      onClick={() => ctx.setValue(value)}
      className={cn(
        "px-3 py-1.5 rounded-fd-full text-sm font-medium transition-colors",
        active
          ? "bg-fd-accent text-fd-accent-foreground shadow"
          : "text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) return null;
  const active = ctx.value === value;

  return (
    <div
      role="tabpanel"
      hidden={!active}
      className={cn(active ? "block" : "hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}