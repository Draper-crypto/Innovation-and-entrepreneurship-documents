import Link from 'next/link';
import Image from 'next/image';
import { blog } from '@/lib/source';

function parseDate(d: unknown): number {
  if (!d) return 0;
  try {
    const dt = typeof d === 'string' || typeof d === 'number' ? new Date(d) : (d as Date);
    const t = +dt;
    return Number.isFinite(t) ? t : 0;
  } catch {
    return 0;
  }
}

export default function BlogIndexPage() {
  const posts = blog
    .getPages()
    .toSorted((a, b) => parseDate((b.data as any).date) - parseDate((a.data as any).date));

  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">博客</h1>
      <p className="text-fd-muted-foreground mb-6">最新文章</p>

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
                  <Image 
                    src={cover} 
                    alt={post.data.title} 
                    fill
                    className="object-cover" 
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : null}
              <div className="p-5">
                <h3 className="text-lg font-semibold group-hover:underline mb-2 line-clamp-2">{post.data.title}</h3>
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