export function Footer() {
  return (
    <footer className="mt-16">
      {/* Top footer area */}
      <div className="border-t border-black/5 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-[var(--spacing-fd-container)] px-4 md:px-6 py-12 text-sm text-gray-600 dark:text-gray-300">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {/* Brand + status */}
            <div>
              <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-violet-600/90 text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M3 3h4v4H3V3zm0 6h4v4H3V9zm0 6h4v4H3v-4zm6-12h4v4H9V3zm0 6h4v4H9V9zm0 6h4v4H9v-4zm6-12h4v4h-4V3zm0 6h4v4h-4V9zm0 6h4v4h-4v-4z" />
                  </svg>
                </span>
                <span className="text-base font-semibold tracking-tight">ElexvxAI Lab</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-white px-3 py-1 text-xs text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                所有系统运行正常
              </div>
            </div>

            {/* Product */}
            <div>
              <div className="mb-3 font-medium text-gray-900 dark:text-white">Product</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="/docs">
                    <span>Documentation</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
                    <span>GitHub</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="/demo">
                    <span>Demo</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <div className="mb-3 font-medium text-gray-900 dark:text-white">Community</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <span>Twitter</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="https://discord.com/" target="_blank" rel="noreferrer">
                    <span>Discord</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
                <li>
                  <a className="group inline-flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
                    <span>Discussions</span>
                    <span className="translate-y-px text-[11px] text-gray-400 transition group-hover:text-gray-600 dark:group-hover:text-gray-300">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 bg-white/70 dark:border-white/10 dark:bg-transparent">
        <div className="mx-auto max-w-[var(--spacing-fd-container)] px-4 md:px-6 py-12 text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Kaneo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
