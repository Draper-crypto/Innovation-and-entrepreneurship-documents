'use client';

import Link from 'next/link';
import { motion, animate, useInView } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { useEffect, useRef, useState } from 'react';
import { BlogCardsSection, type BlogCardItem } from '@/components/home/blog-cards-section';
import { TestimonialsMarquee, type Testimonial } from '@/components/home/testimonials';
import { Alert } from '@heroui/react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

// Count-up number with thousand separators, triggered when element enters viewport
function CountUp({ value, duration = 1.6, delay = 0 }: { value: string | number; duration?: number; delay?: number }) {
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

  // 统一的卡片样式，两个网格公用，保证完全一致
  const cardCls =
-    'group flex h-[220px] flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:ring-white/10';
+    'group flex h-[220px] flex-col rounded-2xl border bg-fd-card p-6 text-fd-card-foreground shadow-sm ring-1 transition hover:shadow-md dark:border-white/10 ring-black/5';
  const iconBoxCls =
-    'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300';
+    'mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-fd-secondary text-fd-secondary-foreground';

  // 共享网格组件：标题、副标题、卡片项
  const FeatureGridSection = ({
    title,
    subtitle,
    items,
  }: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; desc: string }[];
  }) => (
    <motion.section {...fadeIn} className="mx-auto mt-16 max-w-[var(--spacing-fd-container)] px-4 md:px-6">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
      <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className={cardCls}>
            <div className={iconBoxCls}>
              <span className="text-lg">{it.icon}</span>
            </div>
            <div className="text-base font-semibold text-gray-900 dark:text-gray-100">{it.title}</div>
            <div className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{it.desc}</div>
            <div className="mt-auto" />
          </div>
        ))}
      </div>
    </motion.section>
  );

  const features = [
    {
      icon: '🗂️',
      title: '可视化任务管理',
      desc: '直观的看板交互，拖拽卡片、设置优先级并跟踪进度。',
    },
    {
      icon: '🛡️',
      title: '自主部署与安全',
      desc: '部署在你的基础设施上，完全掌控数据与个性化定制。',
    },
    {
      icon: '🔒',
      title: '数据隐私',
      desc: '以安全为核心设计，保护你的隐私与数据安全。',
    },
  ];

  // 首页数据状态（仅用于本页模块，仍保持展示组件解耦合）
  const [latestPosts, setLatestPosts] = useState<BlogCardItem[]>([]);
  const testimonials: Testimonial[] = [
    {
      id: '1',
      content:
        'Fumadocs fixes this by giving you all the right blocks that you compose together. Like headless docs to build exactly what you need.',
      author: 'shadcn',
      role: 'Creator of Shadcn UI',
      avatar: 'https://avatars.githubusercontent.com/u/124599?v=4',
    },
    {
      id: '2',
      content:
        'Major shoutout to @fuma_nama for making fumadocs, a gorgeous documentation framework that composes beautifully into the App Router.',
      author: 'Anthony Shew',
      role: 'Turbo DX at Vercel',
      avatar: 'https://avatars.githubusercontent.com/u/235?u=d78c4a5b5b9d3e59e0c9c5a4d9b7f9e93cdfe4bb&v=4',
    },
    {
      id: '3',
      content: 'fumadocs is the best framework',
      author: 'Aiden Bai',
      role: 'Creator of Million.js',
      avatar: 'https://avatars.githubusercontent.com/u/287268?u=2e3c9b52b4e5d8c68de4b4e3b48d40cc5c3b34b2&v=4',
    },
  ];

  useEffect(() => {
    fetch('/api/blog/latest')
      .then((res) => res.json())
      .then((d) => setLatestPosts(d.items as BlogCardItem[]))
      .catch(() => {});
  }, []);

  return (
    <main className="flex flex-col flex-1 bg-white dark:bg-[rgb(14,14,18)]">
      {/* Top controls */}
      <div className="absolute right-4 top-4 z-20">
        <ThemeToggle />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Blue glow backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 z-0 h-[360px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(70% 70% at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
            maskImage:
              'radial-gradient(70% 70% at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
            background:
              'radial-gradient(65% 85% at 50% 0%, rgba(59,130,246,0.22), rgba(147,197,253,0.18) 45%, rgba(59,130,246,0.05) 70%, transparent 75%)',
            filter: 'blur(28px) saturate(115%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--spacing-fd-container)] px-4 md:px-6 pt-24 pb-20 text-center md:pt-28 md:pb-24">
          {/* Badge pill */}
          <motion.div
            {...fadeIn}
            className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
          >
            <span className="text-yellow-500">✨</span>
            <span>创新大赛文档全新上线 — 立即体验</span>
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-black/10 text-gray-500">→</span>
          </motion.div>

          {/* Heading exact phrase */}
          <motion.h1
            {...fadeIn}
            className="mx-auto max-w-5xl text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white md:text-6xl"
          >
            项目管理
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">更简单</span>{' '}
            ，为团队而生
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-5 max-w-3xl text-lg text-fd-muted-foreground"
          >
            一个专注于「简单与高效」的开源项目管理平台。你可以自部署、深度定制，让它真正属于你。
          </motion.p>

          {/* CTA buttons (capsules) */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.12 }}
            className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/docs"
              className={cn(buttonVariants({ color: 'primary' }), 'rounded-full px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(79,70,229,0.6)]')}
            >
              <span className="mr-2">🔗</span>
              体验演示
            </Link>
            <Link
              href="/docs"
              className={cn(buttonVariants({ color: 'secondary' }), 'rounded-full px-6 py-3 text-sm')}
            >
              <span className="mr-2">›_</span>
              文档
            </Link>
          </motion.div>
        </div>

        {/* Showcase card -> 替换为演示图片 */}
        <motion.div {...fadeIn} transition={{ delay: 0.18 }} className="relative mx-auto mt-2 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-500 p-1 shadow-xl">
            <div className="rounded-2xl bg-neutral-900 p-0.5 sm:p-2">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/demo-hero.svg" alt="Demo" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>



      {/* 复用的功能网格：简单而强大 */}
      <FeatureGridSection
        title="简单而强大"
        subtitle="用必需能力专注于更重要的事情"
        items={features}
      />

      {/* 博客文章卡片模块（数据与组件解耦合） */}
      <BlogCardsSection
        title="博客精选"
        subtitle="最近更新"
        posts={latestPosts}
      />

      {/* 用户评价滚动模块 */}
      <TestimonialsMarquee items={testimonials} />



      {/* CTA BOTTOM */}
      <motion.section
        {...fadeIn}
        className="relative mx-auto mt-24 w-full max-w-none overflow-hidden border-y border-black/5 bg-fd-card px-6 py-16 dark:border-white/10 dark:bg-transparent"
      >
        {/* top blue glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-20 z-0 h-[260px]"
          style={{
            WebkitMaskImage:
              'radial-gradient(65% 65% at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
            maskImage:
              'radial-gradient(65% 65% at 50% 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
            background:
              'radial-gradient(60% 85% at 50% 0%, rgba(99,102,241,0.22), rgba(147,197,253,0.18) 45%, rgba(59,130,246,0.05) 70%, transparent 75%)',
            filter: 'blur(26px) saturate(115%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--spacing-fd-container)] px-4 md:px-6 pt-24 pb-20 text-center md:pt-28 md:pb-24">
          <h3 className="text-3xl font-extrabold tracking-tight text-fd-foreground md:text-4xl">准备好加速了吗？</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fd-muted-foreground">
            从免费账户开始构建。企业版需求可与我们的专家沟通。
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-500"
            >
              60 秒上手
            </Link>
            <Link
              href="/sponsors"
              className={cn(buttonVariants({ color: 'secondary' }), 'rounded-full px-5 py-2.5 text-sm')}
            >
              联系销售
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
