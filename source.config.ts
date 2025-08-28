import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkPangu from './src/lib/remark-pangu';
import { z } from 'zod';
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    dir: 'content/innovation',
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Define blog collection
export const blog = defineDocs({
  docs: {
    dir: 'content/blog',
    schema: frontmatterSchema.extend({
      category: z.string().optional(),
      author: z.string().optional(),
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkPangu],
    // Place it at first, it should be executed before the syntax highlighter
    rehypePlugins: (v) => [rehypeKatex, ...v],
    // MDX options
  },
});
