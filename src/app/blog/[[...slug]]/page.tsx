import { notFound } from 'next/navigation';

// 暂时注释掉未找到的模块导入,需要先创建相应组件
// import { Mermaid } from '@/components/mdx/mermaid';
import { Metadata } from 'next';
import { IconCalendar, IconUser, IconClock, IconTag } from '@tabler/icons-react';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  // 导入博客源数据处理模块
const { blogSource } = require('@/lib/blog-source');
  const page = blogSource.getPage(slug);

  if (!page) notFound();

  const { data } = page.data;
  const formattedDate = format(new Date(data.date || Date.now()), 'PPP', { locale: zhCN });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-gray dark:prose-invert max-w-none">
        {data.thumbnail && (
          <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={data.thumbnail}
              alt={data.title || 'Blog post'}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <IconUser size={16} />
              <span>{data.author || 'Elexvx Lab'}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <IconCalendar size={16} />
              <span>{formattedDate}</span>
            </div>
            
            {data.readingTime && (
              <div className="flex items-center gap-1">
                <IconClock size={16} />
                <span>{data.readingTime}</span>
              </div>
            )}
          </div>

          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  <IconTag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <page.data.body />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  // 导入博客源数据处理模块
  const { blogSource } = require('@/lib/blog-source');
  return blogSource.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // 导入博客源数据处理模块
  const { blogSource } = require('@/lib/blog-source');
  const page = blogSource.getPage(slug);

  if (!page) return {};

  const { data } = page.data;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.thumbnail ? [data.thumbnail] : [],
    },
  };
}