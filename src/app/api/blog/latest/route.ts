import { NextResponse } from 'next/server';
import { blog } from '@/lib/source';
import { normalizeImageSrc } from '@/lib/normalize-image-src';

export const dynamic = 'force-static';

function parseDate(d: unknown): number {
  if (!d) return 0;
  try {
    const dt = typeof d === 'string' || typeof d === 'number' ? new Date(d) : (d as Date);
    const t = +dt;
    return Number.isFinite(t) ? t : 0;
  } catch {
    return 0;
  }
}

export async function GET() {
  const posts = blog.getPages();

  const normalized = posts
    .map((p) => {
      const data: any = p.data || {};
      return {
        title: p.data.title as string,
        description: p.data.description as string | undefined,
        url: p.url,
        cover: normalizeImageSrc(data.cover as string | undefined),
        author: data.author as string | undefined,
        date: data.date ? new Date(data.date).toISOString() : undefined,
        _dateNum: parseDate(data.date),
      };
    })
    // 按日期降序排序（无法解析日期的置后）
    .sort((a, b) => b._dateNum - a._dateNum)
    // 仅取最新三篇
    .slice(0, 3)
    // 去除内部字段
    .map(({ _dateNum, ...rest }) => rest);

  return NextResponse.json({ items: normalized });
}