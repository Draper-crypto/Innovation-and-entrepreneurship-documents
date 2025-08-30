import { NextResponse } from 'next/server';
import { blog } from '@/lib/source';

export const dynamic = 'force-static';

export async function GET() {
  const posts = blog.getPages();
  // 简单按日期字段降序（如果有）
  const normalized = posts
    .map((p) => {
      const data: any = p.data || {};
      return {
        title: p.data.title as string,
        description: p.data.description as string | undefined,
        url: p.url,
        cover: data.cover as string | undefined,
        author: data.author as string | undefined,
        date: data.date ? new Date(data.date).toISOString() : undefined,
      };
    })
    .sort((a, b) => {
      const da = a.date ? +new Date(a.date) : 0;
      const db = b.date ? +new Date(b.date) : 0;
      return db - da;
    })
    .slice(0, 6);

  return NextResponse.json({ items: normalized });
}