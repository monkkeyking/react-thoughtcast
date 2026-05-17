export const flip = `
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
`;
