import Hero from '@/components/Hero'
import { homeConfig } from '@/config/home'

export default function HomePage() {
  return (
    <>
      <div className="container mx-auto px-0">
        <Hero />

        {/* Tech stack / trust bar (light, no black background) */}
        <section className="py-12">
          <div className="mx-auto w-full max-w-[min(1200px,var(--fd-layout-width))] px-6">
            <p className="text-center text-sm uppercase tracking-wider text-fd-muted-foreground mb-6">内置最佳实践</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 opacity-80">
              {['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'MDX', 'Tailwind'].map((k) => (
                <div key={k} className="rounded-md border border-fd-border bg-fd-card py-3 text-center text-xs font-medium">{k}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="mx-auto w-full max-w-[min(1200px,var(--fd-layout-width))] px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">核心优势</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">专注效果与落地，覆盖从想法验证到增长分析的关键路径。</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {homeConfig.features.map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-xl p-6 border border-fd-border bg-fd-card shadow-sm transition-all duration-300 hover:shadow-lg">
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-fd-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

