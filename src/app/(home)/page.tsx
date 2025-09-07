'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';
// 移除未使用的按钮变体导入，避免无谓的 bundle 增长
// import { buttonVariants } from 'fumadocs-ui/components/ui/button';
// 精简图标导入，仅保留用到的图标，减少体积
import { Users, FolderKanban, Shield, Target, Globe, UserCheck } from 'lucide-react';
// 移除 framer-motion 相关的直接导入，改为轻量自实现
// import dynamic from 'next/dynamic';
// import { motion, animate, useInView } from 'framer-motion';

// 轻量 FadeIn 组件：IntersectionObserver + CSS 过渡，替代 framer-motion 的入场动画
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add('opacity-100', 'translate-y-0');
          io.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-4 transition-all duration-500 ease-out will-change-transform',
        className
      )}
    >
      {children}
    </div>
  );
}

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

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const raw = typeof value === 'number' ? value.toString() : value;
    const end = Number((raw || '0').toString().replace(/[^\d.]/g, '')) || 0;

    let rafId = 0;
    let start = -1;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const durationMs = Math.max(0, duration) * 1000;
        const delayMs = Math.max(0, delay) * 1000;

        const step = (ts: number) => {
          if (start < 0) start = ts + delayMs;
          if (ts < start) {
            rafId = requestAnimationFrame(step);
            return;
          }
          const progress = durationMs === 0 ? 1 : Math.min(1, (ts - start) / durationMs);
          const n = Math.round(end * progress);
          el.textContent = n.toLocaleString();
          if (progress < 1) rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);
      },
      { rootMargin: '-100px' }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, duration, delay]);

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
      label: '服务用户',
      suffix: 'K+',
    },
    {
      icon: <FolderKanban />,
      value: '10',
      label: '研究项目',
      suffix: '+',
    },
    {
      icon: <Globe />,
      value: '12',
      label: '合作机构',
      suffix: '+',
    },
    {
      icon: <UserCheck />,
      value: '95',
      label: '合作满意度',
      suffix: '%',
    },
  ];

  const features = [
    {
      icon: <Target className="h-5 w-5" />,
      title: (
        <>
          面向未来的<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">多模态智能</span>
        </>
      ),
      desc: '专注视觉、语音、文本等多模态协同理解与生成，驱动下一代智能应用。',
      gradient:
        'bg-gradient-to-tr from-fuchsia-200 to-sky-200 text-fuchsia-700 dark:from-fuchsia-500/20 dark:to-sky-500/20 dark:text-fuchsia-300',
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: (
        <>
          产业落地与<span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">创新创业</span>
        </>
      ),
      desc: '链接高校与产业，构建从研究到产品的转化通道，推动技术赋能业务增长。',
      gradient:
        'bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 dark:from-emerald-500/20 dark:to-teal-500/20 dark:text-emerald-300',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: (
        <>
          自有资金<span className="bg-gradient-to-r from-lime-500 to-green-400 bg-clip-text text-transparent">投资与资产管理</span>
        </>
      ),
      desc: '以稳健为核心，开展股权/项目投资与资产管理，助力长期价值创造。',
      gradient:
        'bg-gradient-to-tr from-lime-200 to-green-200 text-lime-700 dark:from-lime-500/20 dark:to-green-500/20 dark:text-lime-300',
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
      <div className="text-4xl font-semibold md:text-5xl tabular-nums leading-none">
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
    title: React.ReactNode;
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
      {/* 移除未使用的 ThemeToggle 渲染，避免额外分包 */}
      {/* <div className="absolute right-4 top-4 z-20"><ThemeToggle /></div> */}

      {/* HERO: Left text + Right collage */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-8 md:pt-8 lg:pt-12 md:pb-20">
        <div className="relative z-10 mx-auto grid max-w-[var(--spacing-fd-container)] grid-cols-1 items-center gap-6 px-4 md:grid-cols-2 md:gap-6 md:px-6">
          {/* LEFT: Heading & CTA */}
          <div className="text-left">
            <FadeIn className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
              <span className="text-yellow-500">✨</span>
              <span>创赛指南全新上线，快去看看吧~</span>
            </FadeIn>

            <FadeIn>
              <h1 className="max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-[#1D1D1F] dark:text-white">
                <span className="block bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">技术的价值</span>
                <span className="block">让每个人都能<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">平等</span>迈向数字化未来</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mt-5 max-w-xl text-sm sm:text-base text-fd-muted-foreground">
                AI 赋能，让我们的产品更合心意，助力用户挥洒创意、提升效率、拓展知识、高效学习，真正满足用户需求。
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-8 flex w-full flex-col items-start gap-4 sm:flex-row"></div>
            </FadeIn>
          </div>

          {/* RIGHT: Collage */}
          <FadeIn>
            <div className="relative h-[460px] w-full md:h-[560px]">
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
            </div>
          </FadeIn>
        </div>

        {/* HERO bottom: 四张卡片（示意图风格） */}
        <FadeIn className="relative z-10 mx-auto mt-8 w-full max-w-[var(--spacing-fd-container)] px-4 md:mt-10 md:px-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
            {[
              { icon: '🎨', title: 'LLM研发', desc: '视觉、语音、文本一体化模型' },
              { icon: '⚡', title: '创新创业', desc: '链接产业，快速孵化与落地' },
              { icon: '🌓', title: '创业投资', desc: '长期主义、稳健回报' },
              { icon: '🔌', title: '资产管理', desc: '结构化配置与风险控制' },
            ].map((i) => (
              <div key={i.title} className="rounded-xl border bg-fd-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="text-xl">{i.icon}</div>
                <div className="mt-1 text-sm font-semibold">{i.title}</div>
                <div className="mt-0.5 text-xs text-fd-muted-foreground">{i.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* SIMPLE YET POWERFUL */}
      <FadeIn className="mx-auto mt-16 md:mt-24 max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-fd-foreground md:text-5xl">
            面向产业的
            <span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">人工智能研究</span>
          </h2>
          <p className="mt-2 text-base text-fd-muted-foreground">
            围绕多模态模型、产业落地、投研与资产管理四大方向，打造"研究—产品—资本"一体化能力矩阵。
          </p>
        </div>
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </FadeIn>

      {/* SHOWCASE: Theming (代码与案例占位) */}
      <section className="mx-auto mt-16 md:mt-24 w-full max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white md:text-5xl">
              网站精心设计<span className="bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent">排版精美</span>
            </h2>
            <p className="mt-3 max-w-lg mx-auto text-fd-muted-foreground">网站支持响应式设计，适配PC端与移动端。</p>
          </div>
          <div className="w-full">
            <div className="relative w-full aspect-[2417/1228] max-h-[640px] md:max-h-[720px]">
              <Image
                src="/images/top/top1.svg"
                alt="界面示例"
                fill
                className="object-contain"
                loading="lazy"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR DEVELOPERS at bottom */}
      <FadeIn className="mx-auto mt-16 md:mt-24 max-w-[var(--spacing-fd-container)] px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white md:text-5xl">
            合作与影响
          </h2>
          <p className="mt-2 text-base text-fd-muted-foreground">
            与高校、企业及投资机构共建生态，推动技术创新、产业落地与长期价值增长。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>
      </FadeIn>

    </main>
  );
}
