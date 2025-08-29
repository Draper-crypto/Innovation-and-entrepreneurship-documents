import Link from 'next/link';
import Image from 'next/image';
import { blog } from '@/lib/source';

export default function BlogIndexPage() {
  const posts = blog.getPages();

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">博客</h1>
      <p className="text-fd-muted-foreground mb-8">最新的文章更新</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const cover = (post.data as any).cover as string | undefined;
          const author = (post.data as any).author as string | undefined;
          const date = (post.data as any).date as string | Date | undefined;

          return (
            <Link
              key={post.url}
              href={post.url}
              className="group rounded-xl border bg-background overflow-hidden hover:shadow-md transition-shadow"
            >
              {cover ? (
                <div className="relative aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cover} alt={post.data.title} className="h-full w-full object-cover" />
                </div>
              ) : null}
              <div className="p-5">
                <h2 className="text-xl font-semibold group-hover:underline mb-2 line-clamp-2">{post.data.title}</h2>
                <p className="text-sm text-fd-muted-foreground line-clamp-2 mb-4">{post.data.description}</p>
                <div className="flex items-center text-xs text-fd-muted-foreground gap-3">
                  {author && <span>作者：{author}</span>}
                  {date && (
                    <time dateTime={new Date(date).toISOString()}>
                      {new Date(date).toLocaleDateString()}
                    </time>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}