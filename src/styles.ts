const CSS = `
.thoughtcast-root {
  display: inline-block;
}

/* ── slide-up ── */
.thoughtcast-exit-slide-up {
  animation: thoughtcast-exit-slide-up var(--dur, 220ms) ease-in both;
}
@keyframes thoughtcast-exit-slide-up {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
}
.thoughtcast-enter-slide-up {
  animation: thoughtcast-enter-slide-up var(--dur, 220ms) ease-out both;
}
@keyframes thoughtcast-enter-slide-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── slide-down ── */
.thoughtcast-exit-slide-down {
  animation: thoughtcast-exit-slide-down var(--dur, 220ms) ease-in both;
}
@keyframes thoughtcast-exit-slide-down {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(10px); }
}
.thoughtcast-enter-slide-down {
  animation: thoughtcast-enter-slide-down var(--dur, 220ms) ease-out both;
}
@keyframes thoughtcast-enter-slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── crossfade ── */
.thoughtcast-exit-crossfade {
  animation: thoughtcast-exit-crossfade var(--dur, 220ms) ease-in both;
}
@keyframes thoughtcast-exit-crossfade {
  from { opacity: 1; }
  to   { opacity: 0; }
}
.thoughtcast-enter-crossfade {
  animation: thoughtcast-enter-crossfade var(--dur, 220ms) ease-out both;
}
@keyframes thoughtcast-enter-crossfade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ── flip (rotateX) ── */
.thoughtcast-exit-flip {
  animation: thoughtcast-exit-flip var(--dur, 220ms) ease-in both;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
@keyframes thoughtcast-exit-flip {
  from { opacity: 1; transform: rotateX(0deg); }
  to   { opacity: 0; transform: rotateX(-80deg); }
}
.thoughtcast-enter-flip {
  animation: thoughtcast-enter-flip var(--dur, 220ms) ease-out both;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
@keyframes thoughtcast-enter-flip {
  from { opacity: 0; transform: rotateX(80deg); }
  to   { opacity: 1; transform: rotateX(0deg); }
}

/* ── blur ── */
.thoughtcast-exit-blur {
  animation: thoughtcast-exit-blur var(--dur, 220ms) ease-in both;
}
@keyframes thoughtcast-exit-blur {
  from { opacity: 1; filter: blur(0px); }
  to   { opacity: 0; filter: blur(10px); }
}
.thoughtcast-enter-blur {
  animation: thoughtcast-enter-blur var(--dur, 220ms) ease-out both;
}
@keyframes thoughtcast-enter-blur {
  from { opacity: 0; filter: blur(10px); }
  to   { opacity: 1; filter: blur(0px); }
}

/* ── scale ── */
.thoughtcast-exit-scale {
  animation: thoughtcast-exit-scale var(--dur, 220ms) ease-in both;
}
@keyframes thoughtcast-exit-scale {
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.82); }
}
.thoughtcast-enter-scale {
  animation: thoughtcast-enter-scale var(--dur, 220ms) cubic-bezier(0.34,1.56,0.64,1) both;
}
@keyframes thoughtcast-enter-scale {
  from { opacity: 0; transform: scale(0.82); }
  to   { opacity: 1; transform: scale(1); }
}
`;

const STYLE_ID = 'thoughtcast-styles';

export function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = CSS;
  document.head.appendChild(el);
}
