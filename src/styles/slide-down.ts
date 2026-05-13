export const slideDown = `
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
`;
