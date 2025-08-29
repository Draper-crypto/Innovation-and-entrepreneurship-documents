import Link from 'next/link';

const sponsors = [
  {
    name: 'OpenAlternative',
    description: 'Discover open source alternatives to popular software',
    cover: 'https://i.imgur.com/3P6Jw2R.png',
    url: 'https://openalternative.co',
  },
  {
    name: 'Awesome OSS',
    description: 'A curated list of awesome open-source tools',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com',
  },
  {
    name: 'Dev Productivity',
    description: 'Improve your developer productivity with modern tools',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    url: 'https://example.com',
  },
];

export default function SponsorsPage() {
  return (
    <main className="grow container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">赞助商</h1>
      <p className="text-fd-muted-foreground mb-8">感谢以下优秀项目/伙伴的支持</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className="group rounded-2xl border bg-background overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/9]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.cover} alt={s.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 group-hover:underline">{s.name}</h2>
              <p className="text-sm text-fd-muted-foreground mb-4 line-clamp-2">{s.description}</p>
              <Link
                href={s.url}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white/10 border px-4 py-2 text-sm font-medium hover:bg-white/20 transition-colors"
              >
                访问 {new URL(s.url).host}
                <svg className="ms-2 size-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}