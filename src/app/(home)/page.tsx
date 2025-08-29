import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center gap-10">
      <section className="text-center">
        <h1 className="mb-4 text-3xl font-bold">构建你的文档站</h1>
        <p className="text-fd-muted-foreground">使用 Fumadocs 打造优雅、强大的文档体验。</p>
      </section>

      <nav className="container grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/docs" className="rounded-xl border p-6 hover:bg-fd-card transition">
          <h3 className="text-lg font-semibold mb-1">文档</h3>
          <p className="text-sm text-fd-muted-foreground">开始上手与深入指南</p>
        </Link>
        <Link href="/blog" className="rounded-xl border p-6 hover:bg-fd-card transition">
          <h3 className="text-lg font-semibold mb-1">博客</h3>
          <p className="text-sm text-fd-muted-foreground">更新、洞见与最佳实践</p>
        </Link>
        <Link href="/sponsors" className="rounded-xl border p-6 hover:bg-fd-card transition">
          <h3 className="text-lg font-semibold mb-1">赞助商</h3>
          <p className="text-sm text-fd-muted-foreground">支持我们，推动社区发展</p>
        </Link>
      </nav>
    </main>
  );
}
