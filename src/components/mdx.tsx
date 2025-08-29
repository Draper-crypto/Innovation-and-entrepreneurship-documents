import { useMDXComponent } from 'next-contentlayer/hooks';
import { Mermaid } from './mdx/mermaid';
import { Twoslash } from '@/components/mdx/twoslash';

const components = {
  Mermaid,
  Twoslash,
};

export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}