import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Plugin } from 'unified';
import type { Root, Element } from 'hast';
import { injectStyles } from './styles';

export interface MarkdownTypewriterProps {
  value: string;
  speed?: number;
  cursor?: boolean;
  streaming?: boolean;
  className?: string;
  onComplete?: () => void;
}

const cursorPlugin: Plugin<[], Root> = () => (tree) => {
  const cursorNode: Element = {
    type: 'element',
    tagName: 'span',
    properties: { className: ['thoughtcast-cursor'] },
    children: [],
  };

  for (let i = tree.children.length - 1; i >= 0; i--) {
    const node = tree.children[i];
    if (node.type === 'element') {
      node.children.push(cursorNode);
      return;
    }
  }
  tree.children.push(cursorNode);
};

const REMARK_PLUGINS = [remarkGfm];
const REHYPE_WITH_CURSOR = [cursorPlugin];
const REHYPE_EMPTY: [] = [];

export function MarkdownTypewriter({
  value,
  speed = 20,
  cursor = true,
  streaming = false,
  className,
  onComplete,
}: MarkdownTypewriterProps) {
  const [index, setIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const prevValueRef = useRef(value);
  onCompleteRef.current = onComplete;

  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    const prev = prevValueRef.current;
    prevValueRef.current = value;
    if (!streaming || !value.startsWith(prev)) {
      setIndex(0);
    }
  }, [value, streaming]);

  useEffect(() => {
    if (index >= value.length) {
      onCompleteRef.current?.();
      return;
    }
    const id = setTimeout(() => setIndex(i => i + 1), speed);
    return () => clearTimeout(id);
  }, [index, value.length, speed]);

  const partial = value.slice(0, index);
  const done = index >= value.length;

  return (
    <div className={['thoughtcast-md', className].filter(Boolean).join(' ')}>
      <ReactMarkdown
        remarkPlugins={REMARK_PLUGINS}
        rehypePlugins={cursor && !done ? REHYPE_WITH_CURSOR : REHYPE_EMPTY}
      >
        {partial}
      </ReactMarkdown>
    </div>
  );
}
