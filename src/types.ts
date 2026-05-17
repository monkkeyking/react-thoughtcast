import type React from 'react';

export type AnimationMode =
  | 'slide-up'
  | 'slide-down'
  | 'crossfade'
  | 'flip'
  | 'blur'
  | 'scale';

export type LoaderType =
  | 'typing'
  | 'ripple'
  | 'bounce'
  | 'morph'
  | 'fade'
  | 'spinner'
  | 'spring'
  | 'dna';

export interface ThoughtcastProps {
  value: string;
  mode?: AnimationMode;
  duration?: number;
  className?: string;
  wrapper?: React.ComponentType<{ value: string }>;
  loader?: LoaderType;
  loaderColor?: string;
  loaderGradient?: [string, string];
}
