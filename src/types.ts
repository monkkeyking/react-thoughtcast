export type AnimationMode =
  | 'slide-up'
  | 'slide-down'
  | 'crossfade'
  | 'flip'
  | 'blur'
  | 'scale';

export interface ThoughtcastProps {
  value: string;
  mode?: AnimationMode;
  duration?: number;
  className?: string;
}
