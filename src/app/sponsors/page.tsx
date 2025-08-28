import Image from 'next/image';
import Link from 'next/link';
import { sponsorItems } from '@/data/sponsors';

export default function SponsorsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Sponsors</h1>
        <p className="mt-2 text-fd-muted-foreground">感谢以下合作伙伴对创新创业工作坊的支持。</p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sponsorItems.map((s) => (
          <article
            key={s.name}
            className="group overflow-hidden rounded-2xl border border-fd-border bg-fd-card/70 shadow-sm backdrop-blur-sm"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold">
                <Link href={s.href} target="_blank" className="hover:underline">
                  {s.name}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">{s.description}</p>
              <div className="mt-4">
                <Link href={s.href} target="_blank" className="inline-flex items-center rounded-md bg-fd-muted px-3 py-1.5 text-sm font-medium hover:bg-fd-muted/80">
                  访问 {s.name} ↗
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}