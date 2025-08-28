import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

interface TextNode extends Node {
  type: 'text';
  value: string;
}

const pangu = (text: string): string => {
  // Add space between CJK and English/numbers/symbols
  let result = text.replace(/([\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7ff])([a-zA-Z0-9`~!@#$%^&*()_\-+=|{}'\[\]:";<>,.?/])/, '$1 $2');
  result = result.replace(/([a-zA-Z0-9`~!@#$%^&*()_\-+=|{}'\[\]:";<>,.?/])([\u4e00-\u9fa5\u3040-\u30ff\uac00-\ud7ff])/, '$1 $2');
  
  // Add space between numbers and units (e.g., 100元 -> 100 元)
  result = result.replace(/([0-9])([\u4e00-\u9fa5])/g, '$1 $2');
  result = result.replace(/([\u4e00-\u9fa5])([0-9])/g, '$1 $2');

  return result;
};

const remarkPangu = () => {
  return (tree: Node) => {
    visit(tree, 'text', (node: Node) => {
      const textNode = node as TextNode;
      textNode.value = pangu(textNode.value);
    });
  };
};

export default remarkPangu;