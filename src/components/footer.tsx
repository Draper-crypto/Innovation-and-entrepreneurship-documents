import { Twitter, Github, Disc } from 'lucide-react'
import Link from 'next/link'

const socials = [
  {
    href: 'https://twitter.com/example',
    icon: <Twitter className="h-5 w-5" />,
    label: 'Twitter',
  },
  {
    href: 'https://github.com/example/repo',
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
  },
  {
    href: 'https://discord.gg/example',
    icon: <Disc className="h-5 w-5" />,
    label: 'Discord',
  },
]

export function Footer() {
  return (
    <footer className="mt-24 md:mt-32 border-t bg-fd-card text-fd-card-foreground dark:border-neutral-800">
      <div className="mx-auto max-w-[var(--spacing-fd-container)] px-4 py-10 md:px-6">
        {/* Upper grid: brand + quick links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">ElexvxAI Lab</div>
            <p className="mt-2 max-w-xs text-sm text-fd-muted-foreground">
              创新与创业文档站，基于 Fumadocs 构建，专注于更快更好的知识沉淀与分享。
            </p>
          </div>
          <div>
            <div className="text-sm font-medium">导航</div>
            <ul className="mt-3 space-y-2 text-sm text-fd-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-fd-foreground">
                  文档
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-fd-foreground">
                  博客
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-fd-foreground">
                  赞助
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">社区</div>
            <div className="mt-3 flex items-center gap-4">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-white/60 dark:hover:bg-white/10"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm text-muted-foreground sm:flex-row dark:border-neutral-800">
          <div>© {new Date().getFullYear()} ElexvxAI Lab. All rights reserved.</div>
          <div className="text-xs opacity-80">Made with Fumadocs & Next.js</div>
        </div>
      </div>
    </footer>
  )
}
