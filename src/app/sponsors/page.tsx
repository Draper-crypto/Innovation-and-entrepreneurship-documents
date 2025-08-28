import Image from 'next/image';
import Link from 'next/link';
import { sponsorItems } from '@/data/sponsors';

export default function SponsorsPage() {
  return (
    <main className="mx-auto w-full max-w-[var(--fd-layout-width)] px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">赞助商</h1>
        <p className="mt-3 text-lg text-fd-muted-foreground">感谢以下合作伙伴对 Elexvx Lab 的支持。</p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sponsorItems.map((s) => (
          <article
            key={s.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-fd-border bg-fd-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-lg font-semibold mb-3">
                <Link href={s.href} target="_blank" className="hover:text-fd-primary transition-colors">
                  {s.name}
                </Link>
              </h2>
              <p className="flex-1 text-sm text-fd-muted-foreground leading-relaxed mb-6">{s.description}</p>
              <div className="mt-auto">
                <Link 
                  href={s.href} 
                  target="_blank" 
                  className="inline-flex items-center justify-center w-full rounded-lg bg-fd-primary px-4 py-2.5 text-sm font-medium text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors"
                >
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