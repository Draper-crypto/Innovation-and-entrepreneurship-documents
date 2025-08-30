'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { href: '/docs', title: '文档', desc: '开始上手与深入指南' },
  { href: '/blog', title: '博客', desc: '更新、洞见与最佳实践' },
  { href: '/sponsors', title: '赞助商', desc: '支持我们，推动社区发展' },
];

export default function HomePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <main className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-100 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        <ThemeToggle className="absolute right-4 top-4" />
        <motion.h1
          {...fadeIn}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x"
        >
          AI 实验室文档站
        </motion.h1>
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-fd-muted-foreground"
        >
          使用 Fumadocs 打造优雅、强大的文档体验。
        </motion.p>
      </section>

      {/* Navigation Cards */}
      <section className="container mx-auto px-4 py-16 space-y-12">
        <motion.nav {...fadeIn} className="grid gap-6 sm:grid-cols-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border bg-background overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 transition-all group-hover:from-pink-500 group-hover:to-purple-500">
                  {item.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground transition-colors group-hover:text-foreground">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </motion.nav>

        {/* Case Section with Images */}
        <motion.div {...fadeIn} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="group rounded-xl border bg-background overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://picsum.photos/600/400?random=${id}`}
                  alt={`case ${id}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-fd-primary">
                  案例标题 {id}
                </h3>
                <p className="text-sm text-fd-muted-foreground transition-colors group-hover:text-foreground">
                  案例文案，支持后期替换。
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
