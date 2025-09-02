import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blog } from '@/lib/source';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const Mdx = page.data.body;
  const author = (page.data as any).author as string | undefined;
  const date = (page.data as any).date as string | Date | undefined;

  return (
    <>
      {/* 返回按钮放在标题区上方，并与内容对齐 */}
      <div className="container px-4 pt-6">
        <Link href="/" className="text-sm text-fd-muted-foreground hover:underline">返回首页</Link>
      </div>

      {/* 标题区：对齐并在顶部预留距离，将作者与发布时间放入其中 */}
      <header className="container mt-6 rounded-xl border px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        {page.data.description ? (
          <p className="mb-4 text-fd-muted-foreground">{page.data.description}</p>
        ) : null}
        <div className="flex items-center gap-4 text-sm text-fd-muted-foreground">
          {author && <span>作者：{author}</span>}
          {date && (
            <time dateTime={new Date(date).toISOString()}>
              {new Date(date).toLocaleDateString()}
            </time>
          )}
        </div>
      </header>

      {/* 正文 + 右侧目录（仅桌面端显示） */}
      <div className="container grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8 px-4 py-8">
        <article className="prose min-w-0">
          <Mdx
            components={getMDXComponents({
              a: createRelativeLink(blog, page),
            })}
          />
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-fd-muted-foreground">目录</h3>
            </div>
            <div className="[&>h3]:hidden [&>h4]:hidden [&>[data-title]]:hidden">
              <InlineTOC items={page.data.toc} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return blog.getPages().map((page) => ({ slug: page.slugs[0] }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}