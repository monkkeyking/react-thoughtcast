export const slideUp = `
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
`;
