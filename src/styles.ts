import { base } from './styles/base';
import { slideUp } from './styles/slide-up';
import { slideDown } from './styles/slide-down';
import { crossfade } from './styles/crossfade';
import { flip } from './styles/flip';
import { blur } from './styles/blur';
import { scale } from './styles/scale';
import { cursor } from './styles/cursor';
import { loader } from './styles/loader';

const CSS = [base, slideUp, slideDown, crossfade, flip, blur, scale, cursor, loader].join('');

const STYLE_ID = 'thoughtcast-styles';

export function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
