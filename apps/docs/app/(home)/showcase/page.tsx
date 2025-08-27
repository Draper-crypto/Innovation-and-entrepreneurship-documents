import { PlusIcon } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import { createMetadata } from '@/lib/metadata';
import { showcaseConfig } from './showcase.config';
import Expostarter from '@/public/showcases/expostarter.png';
import Sunar from '@/public/showcases/sunar.png';
import OpenPanel from '@/public/showcases/openpanel.png';
import Supastarter from '@/public/showcases/supastarter.png';
import BetterAuth from '@/public/showcases/better-auth.png';
import ArkType from '@/public/showcases/arktype.png';
import AssistantUI from '@/public/showcases/assistant-ui.png';
import VisionUI from '@/public/showcases/vision-ui.png';
import Link from 'fumadocs-core/link';
import MixSpace from '@/public/showcases/mix-space.png';
import TurboStarter from '@/public/showcases/turbostarter.png';

export const metadata = createMetadata({
  title: showcaseConfig.page.title,
  description: showcaseConfig.page.description,
  openGraph: {
    url: 'https://fumadocs.dev/showcase',
  },
});

interface ShowcaseObject {
  image?: StaticImageData | string;
  name: string;
  url: string;
}

const showcases: ShowcaseObject[] = [
  {
    image: '/showcases/million.png',
    name: 'Million',
    url: 'https://million.dev',
  },
  {
    image: '/showcases/shadcn.png',
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com',
  },
  {
    image: BetterAuth,
    name: 'Better Auth',
    url: 'https://better-auth.com',
  },
  {
    image: '/showcases/better-t-stack.jpeg',
    name: 'Better T Stack',
    url: 'https://better-t-stack.dev',
  },
  {
    image: '/showcases/zod.png',
    name: 'Zod',
    url: 'https://zod.dev',
  },
  { image: '/showcases/nuqs.jpg', name: 'nuqs', url: 'https://nuqs.47ng.com' },
  {
    image: '/showcases/dokploy.png',
    name: 'Dokploy',
    url: 'https://dokploy.com',
  },
  {
    image: '/showcases/ultracite.jpg',
    name: 'Ultracite',
    url: 'https://ultracite.ai',
  },
  {
    image: '/showcases/pigsty.jpg',
    name: 'Pigsty',
    url: 'https://pgsty.dev',
  },
  {
    image: '/showcases/sim.png',
    name: 'Sim',
    url: 'https://sim.ai',
  },
  {
    image: '/showcases/comfydeploy.png',
    name: 'ComfyDeploy',
    url: 'https://comfydeploy.com',
  },
  {
    image: '/showcases/next-faq.png',
    name: 'Next.js Discord Common Questions',
    url: 'https://nextjs-faq.com',
  },
  {
    image: ArkType,
    name: 'Arktype',
    url: 'https://arktype.io',
  },
  {
    image: '/showcases/zen-browser.png',
    name: 'Zen Browser',
    url: 'https://docs.zen-browser.app',
  },
  {
    image: '/showcases/hiro.png',
    name: 'Hiro',
    url: 'https://docs.hiro.so/stacks',
  },
  {
    image: '/showcases/freestyle.png',
    name: 'Freestyle',
    url: 'https://freestyle.sh',
  },
  {
    image: OpenPanel,
    name: 'OpenPanel',
    url: 'https://openpanel.dev',
  },
  {
    image: '/showcases/animate-ui.png',
    name: 'Animate UI',
    url: 'https://animate-ui.com',
  },
  {
    image: '/showcases/kibo-ui.jpg',
    name: 'Kibo UI',
    url: 'https://kibo-ui.com',
  },
  {
    image: '/showcases/libra.png',
    name: 'Libra',
    url: 'https://libra.dev',
  },
  {
    image: '/showcases/hexta-ui.png',
    name: 'HextaUI',
    url: 'https://hextaui.com',
  },
  {
    image: Sunar,
    name: 'Sunar',
    url: 'https://sunar.js.org',
  },
  {
    image: VisionUI,
    name: 'Vision UI',
    url: 'https://vision.uing.dev',
  },
  {
    image: '/showcases/yamlresume.png',
    name: 'YAMLResume',
    url: 'https://yamlresume.dev',
  },
  {
    image: '/showcases/kaneo.png',
    name: 'Kaneo',
    url: 'https://kaneo.app',
  },
  {
    image: '/showcases/axionjs.jpg',
    name: 'axion/js',
    url: 'https://axionjs.com',
  },
  {
    image: MixSpace,
    name: 'MixSpace',
    url: 'https://mx-space.js.org',
  },
  {
    image: '/showcases/codehike.png',
    name: 'CodeHike',
    url: 'https://codehike.org',
  },
  {
    image: AssistantUI,
    name: 'assistant-ui',
    url: 'https://assistant-ui.com',
  },
  {
    image: '/showcases/constatic.png',
    name: 'Constatic',
    url: 'https://constatic-docs.vercel.app',
  },
  {
    image: Supastarter,
    name: 'SupaStarter',
    url: 'https://supastarter.dev',
  },
  {
    image: Expostarter,
    name: 'ExpoStarter',
    url: 'https://expostarter.com/docs',
  },
  {
    image: '/showcases/nxjs.png',
    name: 'nx.js',
    url: 'https://nxjs.n8.io',
  },
  {
    image: TurboStarter,
    name: 'TurboStarter',
    url: 'https://turbostarter.dev',
  },
  {
    name: 'ModelFetch',
    url: 'https://modelfetch.com',
    image: '/showcases/modelfetch.png',
  },
  {
    image: '/showcases/fashnai.png',
    name: 'FasnAI',
    url: 'https://fashn.ai',
  },
  {
    name: 'Dirstarter',
    url: 'https://dirstarter.com',
  },
  {
    name: 'Rehooks',
    url: 'https://rehooks.pyr33x.ir',
  },
  {
    name: 'Sherif',
    url: 'https://eslint-config-sherif.dev',
  },
  {
    name: 'Swellchain',
    url: 'https://build.swellnetwork.io',
  },
  {
    name: 'ESLint React',
    url: 'https://eslint-react.xyz',
  },
  {
    name: 'Llamaindex',
    url: 'https://ts.llamaindex.ai',
  },
  {
    name: 'Nemo',
    url: 'https://nemo.zanreal.com',
  },
  {
    name: 'Clojure Stack Lite',
    url: 'https://stack.bogoyavlensky.com',
  },
  {
    name: 'BProgress',
    url: 'https://bprogress.vercel.app',
  },
  {
    name: 'nextjs i18n docs',
    url: 'https://nextjs.im',
  },
  {
    name: 'Yeecord',
    url: 'https://yeecord.com',
  },
];

const blogs: ShowcaseObject[] = [
  {
    name: "RUNFUNRUN's Blog",
    url: 'https://runfunrun.dev',
  },
  {
    name: 'xlog.systems',
    url: 'https://www.xlog.systems',
  },
  {
    name: 'stutuer',
    url: 'https://www.stutuer.tech',
  },
];

const vercel = [
  {
    name: 'Turbo',
    url: 'https://turbo.build',
  },
  {
    name: 'Flags SDK',
    url: 'https://flags-sdk.dev',
  },
  {
    name: 'Chat SDK',
    url: 'https://chat-sdk.dev',
  },
];
export default function Showcase() {
  return (
    <main className="min-h-screen bg-fd-background">
      {/* Hero Section with enhanced design */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 via-transparent to-fd-secondary/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-fd-border to-transparent" />
        
        <div className="container relative mx-auto px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-fd-card/80 backdrop-blur-sm text-sm font-medium">
              <div className="size-2 rounded-full bg-green-500" />
              <span className="text-fd-muted-foreground">{showcaseConfig.page.badge}</span>
            </div>
            
            <h1 className="text-6xl font-black mb-8 bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-foreground/60 bg-clip-text text-transparent leading-tight">
              {showcaseConfig.page.title}
            </h1>
            <p className="text-xl text-fd-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              {showcaseConfig.page.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={showcaseConfig.page.cta.url}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  buttonVariants({
                    size: 'lg',
                    className: 'rounded-full px-8 h-12 font-semibold',
                  }),
                )}
              >
                <PlusIcon className="mr-2 size-5" />
                {showcaseConfig.page.cta.text}
              </a>
              <span className="text-sm text-fd-muted-foreground flex items-center gap-2">
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {showcaseConfig.page.cta.description}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main showcase grid with improved spacing */}
      <div className="container mx-auto px-6 pb-24">
        {/* All projects grid with unified format */}
        <div className={showcaseConfig.grid.sectionSpacing}>
          <div className="flex items-center gap-4 mb-8">
            <div className={showcaseConfig.sections.main.dividerClass} />
            <h2 className={showcaseConfig.sections.main.titleClass}>{showcaseConfig.sections.main.title}</h2>
            <div className={showcaseConfig.sections.main.dividerClass} />
          </div>
          
          <div className={showcaseConfig.grid.containerClass}>
            {showcases.map((showcase) => (
              <ShowcaseCard key={showcase.url} showcase={showcase} />
            ))}
          </div>
        </div>

        {/* Vercel Partnership Section - Enhanced */}
        <div className={showcaseConfig.grid.sectionSpacing}>
          <div className={showcaseConfig.vercel.containerClass}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-fd-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-fd-secondary/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-2xl bg-fd-background border">
                  <svg
                    aria-label="Vercel logomark"
                    height="48"
                    role="img"
                    viewBox="0 0 74 64"
                    className="size-12 text-fd-foreground"
                  >
                    <path
                      d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <div className={showcaseConfig.vercel.badge.class}>
                    <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {showcaseConfig.vercel.badge.text}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-fd-foreground">
                    {showcaseConfig.vercel.title}
                  </h3>
                  <p className="text-fd-muted-foreground text-lg leading-relaxed">
                    {showcaseConfig.vercel.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {vercel.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className={showcaseConfig.vercel.linkClass}
                    >
                      {item.name}
                      <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section with improved design */}
        <div className={showcaseConfig.grid.sectionSpacing}>
          <div className="flex items-center gap-4 mb-8">
            <div className={showcaseConfig.sections.main.dividerClass} />
            <div className="flex items-center gap-3 px-4">
              <svg className={showcaseConfig.sections.blog.iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <h2 className={showcaseConfig.sections.main.titleClass}>{showcaseConfig.sections.blog.title}</h2>
            </div>
            <div className={showcaseConfig.sections.main.dividerClass} />
          </div>
          
          <div className="text-center mb-8">
            <p className="text-fd-muted-foreground max-w-2xl mx-auto">
              {showcaseConfig.sections.blog.description}
            </p>
          </div>
          
          <div className={showcaseConfig.grid.containerClass}>
            {blogs.map((blog) => (
              <ShowcaseCard key={blog.url} showcase={blog} />
            ))}
          </div>
        </div>

        {/* Statistics section */}
        <div className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-fd-foreground">
              {showcaseConfig.stats.title}
            </h3>
            <div className={showcaseConfig.stats.containerClass}>
              <div className={showcaseConfig.stats.itemClass}>
                <div className={showcaseConfig.stats.numberClass}>
                  {showcases.length}+
                </div>
                <div className={showcaseConfig.stats.labelClass}>
                  {showcaseConfig.text.statLabels.projects}
                </div>
              </div>
              <div className={showcaseConfig.stats.itemClass}>
                <div className={showcaseConfig.stats.numberClass}>
                  {blogs.length}+
                </div>
                <div className={showcaseConfig.stats.labelClass}>
                  {showcaseConfig.text.statLabels.blogs}
                </div>
              </div>
              <div className={showcaseConfig.stats.itemClass}>
                <div className={showcaseConfig.stats.numberClass}>
                  {vercel.length}+
                </div>
                <div className={showcaseConfig.stats.labelClass}>
                  {showcaseConfig.text.statLabels.enterprise}
                </div>
              </div>
              <div className={showcaseConfig.stats.itemClass}>
                <div className={showcaseConfig.stats.numberClass}>
                  100%
                </div>
                <div className={showcaseConfig.stats.labelClass}>
                  {showcaseConfig.text.statLabels.opensource}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ShowcaseCard({ showcase }: { showcase: ShowcaseObject }) {
  const { name, url, image } = showcase;
  const cardConfig = showcaseConfig.card;
  
  return (
    <div className={cardConfig.baseClass}>
      {/* Image Section - Clean design */}
      <div className={`relative ${cardConfig.image.aspectRatio} overflow-hidden ${cardConfig.image.backgroundClass}`}>
        {image ? (
          <Image
            alt={`${name} preview`}
            src={image}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`object-cover ${cardConfig.image.transitionDuration} ${cardConfig.image.hoverScale}`}
          />
        ) : (
          <div className={cardConfig.placeholder.containerClass}>
            <div className="text-center">
              <div className={cardConfig.placeholder.iconContainerClass}>
                <svg className={cardConfig.placeholder.iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
                </svg>
              </div>
              <p className={cardConfig.placeholder.textClass}>
                {new URL(url).hostname}
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section - Simplified */}
      <div className={cardConfig.content.padding}>
        <h3 className={cardConfig.content.titleClass}>
          {name}
        </h3>
        
        <p className={cardConfig.content.descriptionClass}>
          {showcaseConfig.text.defaultDescription}
        </p>
        
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className={cardConfig.content.linkClass}
        >
          <span>{showcaseConfig.text.visitPrefix} {new URL(url).hostname}</span>
          <svg className="size-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
