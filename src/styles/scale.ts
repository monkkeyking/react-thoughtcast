export const scale = `
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
