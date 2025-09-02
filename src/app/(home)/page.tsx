'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { GitFork, Github, Users, FolderKanban, Shield, Lock, Target, Globe, UserCheck } from 'lucide-react';
import { motion, animate, useInView } from 'framer-motion';

// 懒加载重型组件
// Removed incorrect dynamic import of framer-motion. 'motion' must be the named export object.
// const motion = dynamic(() => import('framer-motion').then(mod => mod.default), {
//   ssr: false,
//   loading: () => <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />
// });

// const animate = dynamic(() => import('framer-motion').then(mod => mod.animate), {
//   ssr: false
// });

// const useInView = dynamic(() => import('framer-motion').then(mod => mod.useInView), {
//   ssr: false
// });



const ThemeToggle = dynamic(() => import('@/components/theme-toggle').then(mod => mod.ThemeToggle), {
  ssr: false,
  loading: () => <div className="w-8 h-8 animate-pulse bg-gray-200 dark:bg-gray-700 rounded" />
});



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
      icon: <Users />,
      value: '5',
      label: '累计用户',
      suffix: 'K+',
    },
    {
      icon: <FolderKanban />,
      value: '100',
      label: '成功案例',
      suffix: '+',
    },
    {
      icon: <Globe />,
      value: '12',
      label: '合作院校',
      suffix: '+',
    },
    {
      icon: <UserCheck />,
      value: '95',
      label: '满意度',
      suffix: '%',
    },
  ];

  const features = [
    {
      icon: <FolderKanban className="h-5 w-5" />,
      title: '清晰的文档分类',
      desc: '采用清晰的文档分类，帮助用户快速找到所需内容。',
      gradient: 'bg-gradient-to-tr from-fuchsia-200 to-sky-200 text-fuchsia-700 dark:from-fuchsia-500/20 dark:to-sky-500/20 dark:text-fuchsia-300',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: '开源且免费',
      desc: '项目框架遵循MIT原则，您可以自由的二次开发和分享',
      gradient: 'bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 dark:from-emerald-500/20 dark:to-teal-500/20 dark:text-emerald-300',
    },
    // {
    //   icon: <Lock className="h-5 w-5" />,
    //   title: '数据隐私',
    //   desc: '以安全为核心构建，您的数据始终私密并受到完善的保护。',
    //   gradient: 'bg-gradient-to-tr from-rose-200 to-orange-200 text-rose-700 dark:from-rose-500/20 dark:to-orange-500/20 dark:text-rose-300',
    // },
    // {
    //   icon: <Target className="h-5 w-5" />,
    //   title: '主题令牌',
    //   desc: '使用设计令牌在全局统一品牌与组件风格。',
    //   gradient: 'bg-gradient-to-tr from-indigo-200 to-violet-200 text-indigo-700 dark:from-indigo-500/20 dark:to-violet-500/20 dark:text-indigo-300',
    // },
    // {
    //   icon: <Globe className="h-5 w-5" />,
    //   title: '国际化支持',
    //   desc: '内置良好的 i18n 结构，轻松面向全球用户。',
    //   gradient: 'bg-gradient-to-tr from-cyan-200 to-blue-200 text-cyan-700 dark:from-cyan-500/20 dark:to-blue-500/20 dark:text-cyan-300',
    // },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: '出色的用户体验',
      desc: '遵循良好的用户体验实践，键盘导航与交互无缝支持。',
      gradient: 'bg-gradient-to-tr from-lime-200 to-green-200 text-lime-700 dark:from-lime-500/20 dark:to-green-500/20 dark:text-lime-300',
    },
  ];



  const StatsCard = ({
    icon,
    value,
    label,
    suffix,
  }: {
    icon: React.ReactNode;
    value: string;
    label: string;
    suffix?: string;
  }) => (
    <div className="flex flex-col items-center gap-2 p-6 text-center">
      <div className="text-fd-muted-foreground">{icon}</div>
      <div className="text-4xl font-semibold md:text-5xl">
        <CountUp value={value} />
        {suffix ? (
          <span className="ml-1 align-top text-[0.7em] font-semibold text-fd-foreground">{suffix}</span>
        ) : null}
      </div>
      <div className="text-sm text-fd-muted-foreground">{label}</div>
    </div>
  );

  const FeatureCard = ({
    icon,
    title,
    desc,
    gradient,
  }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    gradient?: string;
  }) => (
    <div className="rounded-xl border bg-fd-card p-6 text-fd-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${gradient ?? 'bg-fd-secondary text-fd-secondary-foreground'}`}>
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-fd-muted-foreground">{desc}</p>
    </div>
  );

  return (
    <main data-home className="flex flex-1 flex-col bg-white pb-8 dark:bg-[rgb(14,14,18)] md:pb-12">
      {/* Top controls */}
      <div className="absolute right-4 top-4 z-20">
        {/* <ThemeToggle /> */}
      </div>

      {/* HERO: Left text + Right collage */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="relative z-10 mx-auto grid max-w-[var(--spacing-fd-container)] grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-6 md:px-6">
          {/* LEFT: Heading & CTA */}
          <div className="text-left">
            <motion.div {...fadeIn} className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <span className="text-yellow-500">✨</span>
              <span>创赛指南全新上线，快去看看吧~</span>
            </motion.div>

            <motion.h1 {...fadeIn} className="max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-[#1D1D1F] dark:text-white">
              <span className="block bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">技术的价值</span>
              <span className="block">让每个人都能<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">平等</span>迈向数字化未来</span>
            </motion.h1>

            <motion.p {...fadeIn} transition={{ delay: 0.08 }} className="mt-5 max-w-xl text-sm sm:text-base text-fd-muted-foreground">
              AI 赋能，让我们的产品更合心意，助力用户挥洒创意、提升效率、拓展知识、高效学习，真正满足用户需求。
            </motion.p>

            <motion.div {...fadeIn} transition={{ delay: 0.12 }} className="mt-8 flex w-full flex-col items-start gap-4 sm:flex-row">
              
            </motion.div>
          </div>

          {/* RIGHT: Collage */}
          <motion.div {...fadeIn} transition={{ delay: 0.04 }} className="relative h-[380px] w-full md:h-[460px]">
            <div className="absolute inset-0 rounded-3xl p-2">
              <Image 
                src="/images/hero/banner.svg" 
                alt="数字化未来" 
                fill
                className="rounded-2xl object-contain object-center" 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* HERO bottom: 四张卡片（示意图风格） */}
        <motion.div {...fadeIn} className="relative z-10 mx-auto mt-8 w-full max-w-[var(--spacing-fd-container)] px-4 md:mt-10 md:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {[
              { icon: '🎨', title: '开源免费', desc: '基于 MIT 协议开源' },
              { icon: '⚡', title: '高性能', desc: '零样式运行时' },
              { icon: '🌓', title: '明暗适配', desc: '自动跟随系统' },
              { icon: '🔌', title: '易扩展', desc: '按需组合组件' },
            ].map((i) => (
              <div key={i.title} className="rounded-xl border bg-fd-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                 <div className="text-xl">{i.icon}</div>
                 <div className="mt-1 text-sm font-semibold">{i.title}</div>
                 <div className="mt-0.5 text-xs text-fd-muted-foreground">{i.desc}</div>
               </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SIMPLE YET POWERFUL */}
      <motion.section
        {...fadeIn}
        className="mx-auto mt-16 md:mt-24 max-w-[var(--spacing-fd-container)] px-4 md:px-6"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-fd-foreground md:text-5xl">
            简洁而强大
          </h2>
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



      {/* SHOWCASE: Theming (代码与案例占位) */}
      <section className="mx-auto mt-16 md:mt-24 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white md:text-5xl">
              按照你的品牌与审美，自由定义<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">主题</span>。
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-fd-muted-foreground">使用 Tailwind 与主题令牌打造你的品牌；切换主题轻而易举。</p>
            {/* 按要求移除按钮 */}
          </div>
          <div className="w-full">
            <div className="rounded-2xl border bg-fd-card shadow-sm overflow-hidden relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" 
                alt="界面示例" 
                fill
                className="object-cover" 
                loading="lazy"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE: Dark mode */}
      <section className="mx-auto mt-16 md:mt-24 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white md:text-5xl">暗色模式，<span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">轻松</span>适配。</h2>
            <p className="mt-3 max-w-lg mx-auto text-fd-muted-foreground">自动检测系统暗色偏好，组件完整适配主题，风格统一。</p>
            {/* 按要求移除按钮 */}
          </div>
          <div className="w-full">
            <div className="rounded-2xl border bg-fd-card shadow-sm overflow-hidden relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1200&auto=format&fit=crop" 
                alt="音乐卡片" 
                fill
                className="object-cover" 
                loading="lazy"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR DEVELOPERS at bottom */}
      <motion.section
        {...fadeIn}
        className="mx-auto mt-16 md:mt-24 max-w-[var(--spacing-fd-container)] px-4 md:px-6"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-fd-foreground md:text-5xl">
            平台数据
          </h2>
          <p className="mt-2 text-base text-fd-muted-foreground">
            加入不断成长的开源社区，共同塑造项目管理的未来
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
          ))}
        </div>
      </motion.section>

    </main>
  );
}
