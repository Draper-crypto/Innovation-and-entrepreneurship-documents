'use client'

import { Github, MessageCircle } from 'lucide-react'
import { IconBrandX } from '@tabler/icons-react'
import Link from 'next/link'

const socials = [
  {
    href: 'https://x.com/elexvx',
    icon: <IconBrandX className="h-5 w-5" />,
    label: 'X',
  },
  {
    href: 'https://github.com/elexvx',
    icon: <Github className="h-5 w-5" />,
    label: 'GitHub',
  },
  {
    href: 'https://weixin.qq.com/',
    icon: <MessageCircle className="h-5 w-5" />,
    label: '微信',
  },
]

export function Footer() {
  return (
    <footer className="mt-0 border-t bg-fd-card text-fd-card-foreground dark:border-neutral-800">
      <div className="mx-auto max-w-[var(--spacing-fd-container)] px-4 py-6 md:px-6">
        {/* Upper grid: brand + quick links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">ElexvxAI Lab</div>
            <p className="mt-2 max-w-xs text-sm text-fd-muted-foreground">
              Elexvx用人工智能驱动创新、知产、人才、供应链，面向全球企业提供数字化增长动力
            </p>
            <div className="mt-4 flex items-center gap-4">
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
          <div className="grid grid-cols-2 gap-6 sm:contents">
            <div>
              <div className="text-sm font-medium">文档</div>
              <ul className="mt-3 space-y-2 text-sm text-fd-muted-foreground">
                <li>
                  <Link href="/docs/innovation" className="hover:text-fd-foreground">
                    创赛指南
                  </Link>
                </li>
                <li>
                  <Link href="/docs/standards" className="hover:text-fd-foreground">
                    规范文档
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium">访问</div>
              <ul className="mt-3 space-y-2 text-sm text-fd-muted-foreground">
                <li>
                  <Link href="/blog" className="hover:text-fd-foreground">
                    博客
                  </Link>
                </li>
                <li>
                  <Link href="/changelog" className="hover:text-fd-foreground">
                    更新日志
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="hover:text-fd-foreground">
                    赞助商
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright */}
        <div className="mt-6 flex flex-col items-center justify-center gap-1 border-t pt-4 text-center text-sm text-muted-foreground dark:border-neutral-800">
          <div className="w-full">本站遵循 <a className="text-blue-500 underline" href='https://creativecommons.org/licenses/by-nc-nd/4.0/' target="_blank"> CC BY-NC-ND 4.0</a> 协议 | 网站状态：<a className="text-blue-500 underline" href='https://status.elexvx.com/'>正常</a></div>
          <div className="w-full">Copyright © 2024 ElexvxAI Lab | 隶属于 <a className="text-blue-500 underline" href='https://ai.elexvx.com/'>宏翔商道（南京）科技发展有限公司</a> | ICP备案：<a className="text-blue-500 underline" href='https://beian.miit.gov.cn/'>苏ICP备2025160017号</a></div>
        </div>
      </div>
    </footer>
  )
}
