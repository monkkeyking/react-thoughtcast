import { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Plugin, PluggableList } from 'unified';
import type { Root, Element } from 'hast';
import { injectStyles } from './styles';

export type { Components };

export interface MarkdownTypewriterProps {
  value: string;
  speed?: number;
  cursor?: boolean;
  streaming?: boolean;
  className?: string;
  onComplete?: () => void;
  remarkPlugins?: PluggableList;
  rehypePlugins?: PluggableList;
  components?: Components;
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

const BASE_REMARK_PLUGINS: PluggableList = [remarkGfm];
const REHYPE_EMPTY: PluggableList = [];

export function MarkdownTypewriter({
  value,
  speed = 20,
  cursor = true,
  streaming = false,
  className,
  onComplete,
  remarkPlugins,
  rehypePlugins,
  components,
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

  const mergedRemarkPlugins = useMemo<PluggableList>(
    () => remarkPlugins ? [...BASE_REMARK_PLUGINS, ...remarkPlugins] : BASE_REMARK_PLUGINS,
    [remarkPlugins],
  );

  const mergedRehypePlugins = useMemo<PluggableList>(() => {
    const withCursor = cursor && !done;
    const base: PluggableList = withCursor ? [cursorPlugin] : REHYPE_EMPTY;
    return rehypePlugins ? [...base, ...rehypePlugins] : base;
  }, [cursor, done, rehypePlugins]);

  return (
    <div className={['thoughtcast-md', className].filter(Boolean).join(' ')}>
      <ReactMarkdown
        remarkPlugins={mergedRemarkPlugins}
        rehypePlugins={mergedRehypePlugins}
        components={components}
      >
        {partial}
      </ReactMarkdown>
    </div>
  );
}
