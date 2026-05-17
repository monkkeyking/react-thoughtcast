import { useState, useEffect, useRef } from 'react';
import { injectStyles } from './styles';
import { Loader } from './loader';
import type { AnimationMode, LoaderType, ThoughtcastProps } from './types';

export type { AnimationMode, LoaderType, ThoughtcastProps };

type Phase = 'idle' | 'exit' | 'enter';

export function Thoughtcast({
  value,
  mode = 'slide-up',
  duration = 220,
  className,
  wrapper: Wrapper,
  loader,
  loaderColor,
  loaderGradient,
}: ThoughtcastProps) {
  const [visible, setVisible] = useState(value);
  const [phase, setPhase] = useState<Phase>('idle');
  const latestRef = useRef(value);

  useEffect(() => { injectStyles(); }, []);

  useEffect(() => {
    latestRef.current = value;
    if (phase === 'idle' && value !== visible) {
      setPhase('exit');
    }
  }, [value]);

  useEffect(() => {
    if (phase === 'idle' && latestRef.current !== visible) {
      setPhase('exit');
    }
  }, [phase, visible]);

  function onAnimationEnd() {
    if (phase === 'exit') {
      setVisible(latestRef.current);
      setPhase('enter');
    } else if (phase === 'enter') {
      setPhase('idle');
    }
  }

  const animClass = phase !== 'idle' ? `thoughtcast-${phase}-${mode}` : '';
  const style = { '--dur': `${duration}ms` } as React.CSSProperties;
  const displayValue = phase === 'exit'
    ? visible
    : (phase === 'enter' ? latestRef.current : visible);
  const content = Wrapper ? <Wrapper value={displayValue} /> : displayValue;

  if (loader) {
    const rootCls = ['thoughtcast-root', 'thoughtcast-root--row', className].filter(Boolean).join(' ');
    return (
      <span className={rootCls}>
        <Loader type={loader} color={loaderColor} gradient={loaderGradient} />
        <span className={animClass} style={style} onAnimationEnd={onAnimationEnd}>
          {content}
        </span>
      </span>
    );
  }

  const rootCls = ['thoughtcast-root', animClass, className].filter(Boolean).join(' ');
  return (
    <span className={rootCls} style={style} onAnimationEnd={onAnimationEnd}>
      {content}
    </span>
  );
}
