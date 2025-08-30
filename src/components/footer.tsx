export function Footer() {
  const columns = [
    { title: '产品', links: ['文档', '博客', '赞助商'] },
    { title: '资源', links: ['API', '示例', '教程'] },
    { title: '社区', links: ['GitHub', 'Discord', 'Twitter'] },
    { title: '公司', links: ['关于我们', '隐私政策', '联系我们'] },
  ];

  return (
    <footer className="mt-16">
      <div className="border-t bg-background/50">
        <div className="container mx-auto px-4 py-10 text-sm text-fd-muted-foreground">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <div className="font-medium mb-3 text-foreground">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 py-6 text-xs text-center text-fd-muted-foreground">
          © {new Date().getFullYear()} Elexvx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
