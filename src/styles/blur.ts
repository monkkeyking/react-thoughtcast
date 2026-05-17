export const blur = `
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
`;
