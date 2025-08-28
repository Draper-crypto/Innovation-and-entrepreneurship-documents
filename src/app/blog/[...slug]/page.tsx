import { blogSource } from '@/lib/blog-source';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { getMDXComponents } from '@/mdx-components';

export default async function BlogPost(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* Back to blog link */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors group"
        >
          <IconArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          返回博客
        </Link>
      </div>

      {/* Article header */}
      <div className="mb-12 border-b border-fd-border pb-8">
        <div className="mb-6 flex items-center gap-4 text-sm">
          {page.data.category && (
            <span className="rounded-full bg-fd-primary/10 px-4 py-2 text-fd-primary font-medium">
              {page.data.category}
            </span>
          )}
          <time className="text-fd-muted-foreground">
            {new Date(page.data.date || Date.now()).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-4">{page.data.title}</h1>
        {page.data.description && (
          <p className="text-xl text-fd-muted-foreground leading-relaxed">
            {page.data.description}
          </p>
        )}
        
        {page.data.author && (
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fd-primary to-fd-primary/70 flex items-center justify-center">
              <span className="text-white font-semibold">
                {page.data.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-medium">{page.data.author}</p>
              <p className="text-sm text-fd-muted-foreground">作者</p>
            </div>
          </div>
        )}
      </div>

      {/* Article content */}
      <article className="prose prose-fd max-w-none prose-headings:scroll-m-20 prose-headings:tracking-tight prose-h1:text-3xl prose-h1:font-bold prose-h2:text-2xl prose-h2:font-semibold prose-h2:border-b prose-h2:border-fd-border prose-h2:pb-2 prose-h3:text-xl prose-h3:font-semibold prose-p:leading-7 prose-blockquote:border-l-4 prose-blockquote:border-fd-primary prose-blockquote:pl-6 prose-blockquote:italic prose-code:relative prose-code:rounded prose-code:bg-fd-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:border prose-pre:border-fd-border prose-pre:bg-fd-card prose-pre:p-4 prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-li:mt-2 prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-fd-border prose-th:border prose-th:border-fd-border prose-th:bg-fd-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-fd-border prose-td:px-4 prose-td:py-2">
        <MDXContent components={getMDXComponents()} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string[] }> },
): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      type: 'article',
      publishedTime: page.data.date,
      authors: page.data.author ? [page.data.author] : undefined,
    },
  };
}