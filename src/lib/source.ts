import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  // Fix: route should match /docs to avoid 404 when navigating
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
