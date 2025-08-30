'use client';

import Link from 'next/link';
import { motion, animate, useInView } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { GitFork, Github, Users } from 'lucide-react';

// Count-up number with thousand separators, triggered when element enters viewport
function CountUp({
  value,
  duration = 1.6,
  delay = 0,
}: {
  value: string | number;
  duration?: number;
  delay?: number;
}) {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(spanRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView || !spanRef.current) return;
    const raw = typeof value === 'number' ? value.toString() : value;
    const end = Number((raw || '0').toString().replace(/[^\d.]/g, '')) || 0;

    const controls = animate(0, end, {
      duration,
      delay,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (!spanRef.current) return;
        const n = Math.round(v);
        spanRef.current.textContent = n.toLocaleString();
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, delay]);

  return <span ref={spanRef} aria-label={String(value)} />;
}

export default function HomePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.5, ease: 'easeOut' },
  } as const;

  const stats = [
    {
      icon: <Github />,
      value: '1,968',
      label: 'GitHub 星标',
    },
    {
      icon: <GitFork />,
      value: '141',
      label: 'GitHub 派生',
    },
    {
      icon: <Users />,
      value: '24',
      label: '贡献者',
    },
  ];

  const features = [
    {
      icon: '🗂️',
      title: '可视化任务管理',
      desc: '采用直观的看板界面组织任务；拖拽排序、设置优先级并跟踪进度。',
    },
    {
      icon: '🛡️',
      title: '自托管与安全',
      desc: '在自有基础设施上部署，完全掌控数据与个性化配置。',
    },
    {
      icon: '🔒',
      title: '数据隐私',
      desc: '以安全为核心构建，您的数据始终私密并受到完善的保护。',
    },
  ];

  const StatsCard = ({
    icon,
    value,
    label,
  }: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }) => (
    <div className="flex flex-col items-center gap-2 p-6 text-center">
      <div className="text-fd-muted-foreground">{icon}</div>
      <div className="text-3xl font-bold">
        <CountUp value={value} />
      </div>
      <div className="text-sm text-fd-muted-foreground">{label}</div>
    </div>
  );

  const FeatureCard = ({
    icon,
    title,
    desc,
  }: {
    icon: string;
    title: string;
    desc: string;
  }) => (
    <div className="rounded-xl border bg-fd-card p-6 text-fd-card-foreground shadow-sm">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fd-secondary text-fd-secondary-foreground">
        <span className="text-lg">{icon}</span>
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-fd-muted-foreground">{desc}</p>
    </div>
  );

  return (
    <main className="flex flex-1 flex-col bg-white pb-24 dark:bg-[rgb(14,14,18)] md:pb-32">
      {/* Top controls */}
      <div className="absolute right-4 top-4 z-20">
        <ThemeToggle />
      </div>

      {/* HERO: Left text + Right collage */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="relative z-10 mx-auto grid max-w-[var(--spacing-fd-container)] grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-6 md:px-6">
          {/* LEFT: Heading & CTA */}
          <div className="text-left">
            <motion.div
              {...fadeIn}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
            >
              <span className="text-yellow-500">✨</span>
              <span>开源且对开发者友好</span>
            </motion.div>

            <motion.h1
              {...fadeIn}
              className="max-w-xl text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white md:text-6xl"
            >
              无论是否具备设计经验，都能快速构建<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">精美</span>网站。
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.08 }}
              className="mt-5 max-w-xl text-lg text-fd-muted-foreground"
            >
              现代、快速、可定制的 React UI 组件库，助你构建易用与可访问的 Web 应用。
            </motion.p>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.12 }}
              className="mt-8 flex w-full flex-col items-start gap-4 sm:flex-row"
            >
              <Link
                href="/docs"
                className={cn(
                  buttonVariants({ color: 'primary' }),
                  'rounded-full px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(99,102,241,0.45)]',
                )}
              >
                开始使用
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                <code className="font-mono">$ npx your-cli@latest init</code>
                <span className="opacity-70">⎘</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Collage */}
          <div className="relative h-[380px] w-full md:h-[460px]">
            {/* floating cards */}
            <div className="absolute left-4 top-3 rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur dark:bg-white/5">
              <div className="text-xs text-gray-500">笔记</div>
              <div className="mt-2 h-2 w-24 rounded bg-gray-200/70 dark:bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded bg-gray-200/70 dark:bg-white/10" />
            </div>
            <div className="absolute left-1/2 top-10 w-[180px] -translate-x-1/2 rounded-2xl border bg-white p-3 shadow-lg dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">UI</div>
                <div className="flex-1">
                  <div className="h-2 w-24 rounded bg-gray-200/70 dark:bg-white/10" />
                  <div className="mt-1 h-2 w-16 rounded bg-gray-200/70 dark:bg-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute right-2 top-0 w-[180px] rounded-2xl bg-white/90 p-1.5 shadow-xl ring-1 ring-black/5 dark:bg-white/5">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop" alt="相机" className="h-28 w-full rounded-xl object-cover" />
              <div className="px-2 py-1 text-[11px] text-gray-600 dark:text-gray-300">相机 $525</div>
            </div>
            <div className="absolute right-8 bottom-10 w-[200px] rounded-2xl bg-white/90 p-2 shadow-xl ring-1 ring-black/5 dark:bg-white/5">
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=640&auto=format&fit=crop" alt="头像" className="h-32 w-full rounded-xl object-cover" />
              <div className="flex items-center justify-between px-2 pb-2 pt-1 text-[11px] text-gray-600 dark:text-gray-300">
                <span>即将上架</span>
                <span className="inline-flex rounded-full bg-green-600/90 px-2 py-0.5 text-white">提醒我</span>
              </div>
            </div>
            <div className="absolute left-8 bottom-8 w-[240px] rounded-2xl border bg-white p-3 shadow-md dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-pink-500/90" />
                <div className="flex-1">
                  <div className="h-2 w-32 rounded bg-gray-200/70 dark:bg-white/10" />
                  <div className="mt-1 h-2 w-20 rounded bg-gray-200/70 dark:bg-white/10" />
                </div>
                <button className="rounded-full bg-blue-600 px-2 py-1 text-[11px] text-white">关注</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR DEVELOPERS */}
      <motion.section
        {...fadeIn}
        className="mx-auto mt-16 max-w-[var(--spacing-fd-container)] px-4 md:px-6"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-fd-foreground">
            为开发者而生
          </h3>
          <p className="mt-2 text-base text-fd-muted-foreground">
            加入不断成长的开源社区，共同塑造项目管理的未来
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>
      </motion.section>

      {/* SIMPLE YET POWERFUL */}
      <motion.section
        {...fadeIn}
        className="mx-auto mt-24 max-w-[var(--spacing-fd-container)] px-4 md:px-6"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-fd-foreground">
            简洁而强大
          </h3>
          <p className="mt-2 text-base text-fd-muted-foreground">
            聚焦核心能力，快速上手构建
          </p>
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </motion.section>

      {/* TESTIMONIALS MARQUEE (Good reviews) */}
      <section className="mx-auto mt-14 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-fd-card p-4 shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-fd-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-fd-card to-transparent" />
          <div className="[--speed:22s] animate-[marquee_var(--speed)_linear_infinite] flex gap-4 will-change-transform">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="min-w-[260px] max-w-[280px] shrink-0 rounded-xl border bg-white/90 p-4 text-sm dark:bg-white/5">
                <p className="line-clamp-4 text-[13px] leading-6 text-fd-muted-foreground">
                  “Fumadocs 让文档构建变得简单；组件既美观又具备良好组合性。”
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/90 text-white">{i + 1}</span>
                  <span className="text-fd-muted-foreground">开源开发者</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 [--speed:26s] animate-[marquee_reverse_var(--speed)_linear_infinite] flex gap-4 will-change-transform">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="min-w-[260px] max-w-[280px] shrink-0 rounded-xl border bg-white/90 p-4 text-sm dark:bg-white/5">
                <p className="line-clamp-4 text-[13px] leading-6 text-fd-muted-foreground">
                  “开发体验极佳，我在一天内就重构完文档。”
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/90 text-white">{i + 11}</span>
                  <span className="text-fd-muted-foreground">前端工程师</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE: Theming (代码与案例占位) */}
      <section className="mx-auto mt-24 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              按照你的品牌与审美，自由定义<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">主题</span>。
            </h2>
            <p className="mt-3 max-w-lg text-fd-muted-foreground">使用 Tailwind 与主题令牌打造你的品牌；切换主题轻而易举。</p>
            <div className="mt-6 inline-flex gap-3">
              <Link href="/docs" className={cn(buttonVariants({ color: 'primary' }), 'rounded-full px-5')}>了解更多</Link>
              <Link href="/docs" className={cn(buttonVariants({ color: 'secondary' }), 'rounded-full px-5')}>文档</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-fd-card p-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" alt="界面示例" className="h-64 w-full rounded-xl object-cover" />
            </div>
            <div className="rounded-2xl border bg-fd-card p-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop" alt="代码示例" className="h-64 w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE: Accessibility */}
      <section className="mx-auto mt-16 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl border bg-gradient-to-br from-teal-400/30 to-fuchsia-400/30 p-6 shadow-sm dark:from-teal-500/10 dark:to-fuchsia-500/10">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" alt="无障碍界面" className="h-72 w-full rounded-xl object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">开箱即用的无障碍能力</h2>
            <p className="mt-3 max-w-lg text-fd-muted-foreground">遵循优秀的 a11y 实践：键盘导航、焦点管理、读屏友好等一应俱全。</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-fd-muted-foreground">
              {['键盘导航','焦点管理','碰撞感知','对齐控制','读屏支持','Typeahead 搜索'].map((t) => (
                <div key={t} className="rounded-full border bg-white/70 px-3 py-1 dark:bg-white/5">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE: Dark mode */}
      <section className="mx-auto mt-16 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">暗色模式，<span className="text-orange-500">轻松</span>适配。</h2>
            <p className="mt-3 max-w-lg text-fd-muted-foreground">自动检测系统暗色偏好，组件完整适配主题，风格统一。</p>
            <Link href="/docs" className={cn(buttonVariants({ color: 'secondary' }), 'mt-6 rounded-full px-5')}>了解更多</Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-fd-card p-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop" alt="音乐卡片" className="h-64 w-full rounded-xl object-cover" />
            </div>
            <div className="rounded-2xl border bg-fd-card p-3 shadow-sm">
              <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" alt="代码暗色模式" className="h-64 w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
