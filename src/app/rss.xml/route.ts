import { getRSS } from '@/lib/rss';

export const dynamic = 'force-dynamic';
export const revalidate = false;

export function GET() {
  return new Response(getRSS(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
