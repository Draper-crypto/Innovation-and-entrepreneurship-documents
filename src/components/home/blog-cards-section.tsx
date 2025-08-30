import Link from 'next/link';

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
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-sm text-gray-500">{emptyText}</p>
      ) : (
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:ring-white/10"
            >
              {post.cover ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
                </div>
              ) : null}
              <div className="p-5">
                <h4 className="line-clamp-2 text-base font-semibold text-gray-900 group-hover:underline dark:text-gray-100">
                  {post.title}
                </h4>
                {post.description ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                ) : null}
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
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