import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-base text-fd-muted-foreground">页面未找到或已移除。</p>
      <Link
        href="/"
        className="inline-flex items-center rounded-md bg-[var(--color-fd-primary)] px-4 py-2 text-white transition hover:opacity-90"
      >
        返回首页
      </Link>
    </div>
  )
}