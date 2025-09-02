import Link from 'next/link'
import type { Metadata } from 'next'
import { changelog as changelogSource } from '@/lib/source'
import { getMDXComponents } from '@/mdx-components'

function parseDate(d: unknown): number {
  if (!d) return 0
  try {
    const dt = typeof d === 'string' || typeof d === 'number' ? new Date(d) : (d as Date)
    const t = +dt
    return Number.isFinite(t) ? t : 0
  } catch {
    return 0
  }
}

export const metadata: Metadata = {
  title: '更新日志',
  description: '网站的功能更新、优化与修复记录，以时间轴形式展示。',
}

export default function ChangelogPage() {
  const items = [...changelogSource.getPages()].sort(
    (a, b) => parseDate((b.data as any).date) - parseDate((a.data as any).date)
  )

  return (
    <div className="container px-4 py-10">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">更新日志</h1>
          <p className="mt-2 text-fd-muted-foreground">记录每一次值得被看见的改变</p>
        </div>
        <Link href="/" className="text-sm text-fd-muted-foreground hover:underline">
          返回首页
        </Link>
      </header>

      <ol className="relative ms-2 border-s border-fd-border">
        {items.map((page) => {
          const date = (page.data as any).date as string | Date | undefined
          const tags = (page.data as any).tags as string[] | undefined
          const Mdx = page.data.body as any
          return (
            <li key={page.url} className="mb-10 ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-fd-background bg-fd-primary" />
              <div className="rounded-xl border bg-fd-card text-fd-card-foreground p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  {date ? (
                    <time className="text-sm text-fd-muted-foreground" dateTime={new Date(date).toISOString()}>
                      {new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', day: '2-digit', month: '2-digit' })}
                    </time>
                  ) : null}
                  {tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-fd-secondary px-2 py-0.5 text-xs font-medium text-fd-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-snug">{page.data.title}</h3>
                {page.data.description ? (
                  <p className="mt-2 text-fd-muted-foreground">{page.data.description}</p>
                ) : null}
                <div className="prose mt-3 max-w-none">
                  <Mdx components={getMDXComponents()} />
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      <p className="mt-8 text-sm text-fd-muted-foreground">想查看更早的变更？请关注我们的 GitHub 提交记录或后续补充。</p>
    </div>
  )
}