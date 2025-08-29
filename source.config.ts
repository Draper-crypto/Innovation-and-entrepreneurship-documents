import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
  defineCollections,
} from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { z } from 'zod';

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections#define-docs
export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Blog collection with custom frontmatter: author, date, cover
export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.union([z.string(), z.date()]),
    cover: z.string().optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    // Place it at first, it should be executed before the syntax highlighter
    rehypePlugins: (v) => [rehypeKatex, ...v],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langs: ['ts', 'typescript', 'js', 'javascript'],
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash()
      ],
    },
  },
});
