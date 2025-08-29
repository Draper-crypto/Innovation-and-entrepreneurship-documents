import { source } from '@/lib/source';
import type { InferPageType } from 'fumadocs-core/source';

export async function getLLMText(page: InferPageType<typeof source>) {
  return `# ${page.data.title}
URL: ${page.url}

${page.data.content}`;
}