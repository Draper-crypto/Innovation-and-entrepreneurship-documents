export function Footer() {
  return (
    <footer className="mt-16">
      {/* 信息区 */}
      <div className="border-t bg-background/50">
        <div className="container mx-auto px-4 py-10 text-sm text-fd-muted-foreground grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold text-foreground">ElexvxAI Lab</div>
            <p className="leading-6">以工程化与产品思维打造更好的开发者体验。</p>
          </div>
          <div>
            <div className="font-medium mb-3 text-foreground">链接</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="/docs">文档</a></li>
              <li><a className="hover:underline" href="/blog">博客</a></li>
              <li><a className="hover:underline" href="/sponsors">赞助商</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-foreground">链接</div>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="/docs">文档</a></li>
              <li><a className="hover:underline" href="/blog">博客</a></li>
              <li><a className="hover:underline" href="/sponsors">赞助商</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* 版权区：单独一行置底 */}
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 py-6 text-xs text-center text-fd-muted-foreground">
          © {new Date().getFullYear()} Elexvx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}