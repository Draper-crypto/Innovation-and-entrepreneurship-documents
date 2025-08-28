import Link from 'next/link'
import { blogSource } from '@/lib/blog-source'

// 生成渐变色背景
const generateGradient = (index: number) => {
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600', 
    'from-orange-500 to-red-600',
    'from-purple-500 to-pink-600',
    'from-teal-500 to-blue-600',
    'from-red-500 to-orange-600'
  ]
  return gradients[index % gradients.length]
}

export default function BlogPage() {
  const posts = blogSource.getPages()

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">博客</h1>
        <p className="mt-3 text-lg text-fd-muted-foreground">关于本网站与 Fumadocs 的动态与思考</p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={post.url}
            className="group overflow-hidden rounded-2xl border border-fd-border bg-fd-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            {/* 渐变色图片占位 */}
            <div className={`relative h-48 w-full bg-gradient-to-br ${generateGradient(index)} flex items-center justify-center`}>
              <div className="text-white/90 text-center">
                <div className="text-2xl font-bold mb-2">{post.data.category ?? '文章'}</div>
                <div className="text-sm opacity-80">{new Date(post.data.date || Date.now()).toLocaleDateString()}</div>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-semibold mb-3 line-clamp-2 min-h-[3.5rem]">
                <Link href={post.url} className="hover:text-fd-primary transition-colors">
                  {post.data.title}
                </Link>
              </h2>

              <div className="flex-1 mb-6">
                {post.data.description && (
                  <p className="text-sm text-fd-muted-foreground line-clamp-3 leading-relaxed">
                    {post.data.description}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mt-auto">
                {post.data.author && (
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-fd-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold">
                        {post.data.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-fd-muted-foreground truncate">{post.data.author}</span>
                  </div>
                )}
                <Link 
                  href={post.url} 
                  className="inline-flex items-center text-sm font-medium text-fd-primary hover:text-fd-primary/80 transition-colors flex-shrink-0"
                >
                  阅读更多 →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}