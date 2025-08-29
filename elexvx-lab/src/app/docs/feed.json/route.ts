import { getJSON } from '@/lib/rss';

export const revalidate = false;

export function GET() {
  return new Response(getJSON(), {
    headers: {
      'Content-Type': 'application/feed+json',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}