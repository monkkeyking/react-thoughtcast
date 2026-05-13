import type React from 'react';
import type { LoaderType } from './types';

export interface LoaderProps {
  type: LoaderType;
  color?: string;
  gradient?: [string, string];
  className?: string;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace('#', '');
  if (m.length !== 6) return null;
  return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16)];
}

function lerpColor(from: string, to: string, t: number): string {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  if (!a || !b) return from;
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

function gradStyle(
  g: [string, string],
  index: number,
  size: number,
  gap: number,
  count: number,
): React.CSSProperties {
  const totalW = count * size + (count - 1) * gap;
  const offset = index * (size + gap);
  return {
    background: `linear-gradient(90deg, ${g[0]}, ${g[1]})`,
    backgroundSize: `${totalW}px 100%`,
    backgroundPosition: `-${offset}px center`,
  };
}

const B = ({ style }: { style?: React.CSSProperties }) => (
  <span className="b" style={style} />
);

function cls(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(' ');
}

export function Loader({ type, color, gradient: g, className }: LoaderProps) {
  const wrapStyle = !g && color ? { color } : undefined;

  switch (type) {
    case 'typing': {
      return (
        <span className={cls('tc-loader tc-loader-typing', className)} style={wrapStyle}>
          {[0,1,2].map(i => <B key={i} style={g ? gradStyle(g, i, 9, 7, 3) : undefined} />)}
        </span>
      );
    }

    case 'ripple': {
      return (
        <span className={cls('tc-loader tc-loader-ripple', className)} style={wrapStyle}>
          {[0,1,2].map(i => <B key={i} style={g ? gradStyle(g, i, 9, 7, 3) : undefined} />)}
        </span>
      );
    }

    case 'bounce': {
      return (
        <span className={cls('tc-loader tc-loader-bounce', className)} style={wrapStyle}>
          {[0,1,2,3].map(i => <B key={i} style={g ? gradStyle(g, i, 9, 7, 4) : undefined} />)}
        </span>
      );
    }

    case 'morph': {
      return (
        <span className={cls('tc-loader tc-loader-morph', className)} style={wrapStyle}>
          {[0,1,2].map(i => <B key={i} style={g ? gradStyle(g, i, 12, 7, 3) : undefined} />)}
        </span>
      );
    }

    case 'fade': {
      return (
        <span className={cls('tc-loader tc-loader-fade', className)} style={wrapStyle}>
          {[0,1,2,3,4].map(i => <B key={i} style={g ? gradStyle(g, i, 11, 7, 5) : undefined} />)}
        </span>
      );
    }

    case 'spinner': {
      return (
        <span className={cls('tc-loader-spinner', className)} style={wrapStyle}>
          {Array.from({ length: 8 }, (_, i) => (
            <B key={i} style={g ? { background: lerpColor(g[0], g[1], i / 7) } : undefined} />
          ))}
        </span>
      );
    }

    case 'spring': {
      return (
        <span className={cls('tc-loader tc-loader-spring', className)} style={wrapStyle}>
          {[0,1,2].map(i => <B key={i} style={g ? gradStyle(g, i, 12, 7, 3) : undefined} />)}
        </span>
      );
    }

    case 'dna': {
      const dnaGrad = (offset: number): React.CSSProperties | undefined =>
        g ? {
          background: `linear-gradient(90deg, ${g[0]}, ${g[1]})`,
          backgroundSize: '23px 100%',
          backgroundPosition: `-${offset}px center`,
        } : undefined;
      return (
        <span className={cls('tc-loader-dna', className)} style={wrapStyle}>
          <span className="strand s1">
            {[0,1,2].map(i => <B key={i} style={dnaGrad(0)} />)}
          </span>
          <span className="strand s2">
            {[0,1,2].map(i => <B key={i} style={dnaGrad(14)} />)}
          </span>
        </span>
      );
    }
  }
}
