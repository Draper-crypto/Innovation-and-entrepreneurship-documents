import Image from 'next/image';
import Link from 'next/link';
import { blogItems } from '@/data/blog';

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-fd-muted-foreground">Latest articles and updates from our workshop.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogItems.map((post) => (
          <article
            key={post.title}
            className="group relative overflow-hidden rounded-2xl border border-fd-border bg-fd-card/70 p-0 shadow-sm backdrop-blur-sm"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            </div>

            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-fd-muted-foreground">{post.category ?? 'Update'}</span>
                <time className="text-xs text-fd-muted-foreground">{new Date(post.date).toDateString()}</time>
              </div>

              <h2 className="line-clamp-2 text-lg font-semibold">
                <Link href={post.href} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 line-clamp-2 text-sm text-fd-muted-foreground">{post.description}</p>

              <div className="mt-4">
                <Link href={post.href} className="text-sm font-medium underline">
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}