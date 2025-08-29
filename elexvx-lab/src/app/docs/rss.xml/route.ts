import { getRSS } from '@/lib/rss';

export const revalidate = false;

export function GET() {
  return new Response(getRSS(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}