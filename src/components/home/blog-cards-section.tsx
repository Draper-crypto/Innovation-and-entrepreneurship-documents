import Link from 'next/link';
import Image from 'next/image';

export type BlogCardItem = {
  title: string;
  description?: string;
  url: string;
  cover?: string;
  author?: string;
  date?: string | Date;
};

// 展示组件：仅负责渲染，不做数据获取
export function BlogCardsSection({
  title = '最新文章',
  subtitle = '来自博客的精选内容',
  posts,
  emptyText = '暂无文章',
}: {
  title?: string;
  subtitle?: string;
  posts: BlogCardItem[];
  emptyText?: string;
}) {
  const items = posts
    .slice()
    .sort((a, b) => {
      const da = a.date ? +new Date(a.date) : 0;
      const db = b.date ? +new Date(b.date) : 0;
      return db - da;
    })
    .slice(0, 3);

  return (
    <section className="mx-auto mt-16 max-w-[var(--spacing-fd-container)] px-4 md:px-6">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-fd-foreground">{title}</h3>
        <p className="mt-2 text-base text-fd-muted-foreground">{subtitle}</p>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-sm text-fd-muted-foreground">{emptyText}</p>
      ) : (
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-fd-card text-fd-card-foreground shadow-sm ring-1 transition hover:shadow-md dark:border-white/10 ring-black/5"
            >
              {post.cover ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image 
                    src={post.cover} 
                    alt={post.title} 
                    fill
                    className="object-cover" 
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <h4 className="line-clamp-2 text-base font-semibold text-fd-foreground group-hover:underline">
                  {post.title}
                </h4>
                {post.description ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-fd-muted-foreground">
                    {post.description}
                  </p>
                ) : null}
                <div className="mt-3 flex items-center gap-3 text-xs text-fd-muted-foreground">
                  {post.author ? <span>作者：{post.author}</span> : null}
                  {post.date ? (
                    <time dateTime={new Date(post.date).toISOString()}>
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}