import { getAtom } from '@/lib/rss';

export const revalidate = false;

export function GET() {
  return new Response(getAtom(), {
    headers: {
      'Content-Type': 'application/atom+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}