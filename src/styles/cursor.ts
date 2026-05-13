export const cursor = `
.thoughtcast-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: currentColor;
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: thoughtcast-cursor-blink 1s step-end infinite;
}
@keyframes thoughtcast-cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
`;
