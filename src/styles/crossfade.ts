export const crossfade = `
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
`;
