import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/mdx/mermaid';

import * as Twoslash from 'fumadocs-twoslash/ui';
import type { MDXComponents } from 'mdx/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  // 兼容：有的版本默认导出是函数（需要调用），有的是对象
  const base =
    typeof defaultMdxComponents === 'function'
      ? (defaultMdxComponents as unknown as () => MDXComponents)()
      : (defaultMdxComponents as unknown as MDXComponents);

  return {
    ...base,
    Mermaid,
    ...Twoslash,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    ...components,
  } as MDXComponents;
}
