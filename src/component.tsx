import { useState, useEffect, useRef } from 'react';
import { injectStyles } from './styles';
import type { AnimationMode, ThoughtcastProps } from './types';

export type { AnimationMode, ThoughtcastProps };

type Phase = 'idle' | 'exit' | 'enter';

export function Thoughtcast({
  value,
  mode = 'slide-up',
  duration = 220,
  className,
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
  const cls = ['thoughtcast-root', animClass, className].filter(Boolean).join(' ');

  return (
    <span
      className={cls}
      style={{ '--dur': `${duration}ms` } as React.CSSProperties}
      onAnimationEnd={onAnimationEnd}
    >
      {phase === 'exit' ? visible : (phase === 'enter' ? latestRef.current : visible)}
    </span>
  );
}
