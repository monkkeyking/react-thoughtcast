# react-thoughtcast

> ⚠️ **Early stage / beta.** API may change. Use at your own risk in production.

Animated string-transition component for React. Drop in a `<Thoughtcast>` and any time its `value` prop changes, the old text animates out and the new text animates in.

## Install

```bash
npm install react-thoughtcast
```

`react` and `react-dom` (>=17) are peer dependencies.

## Usage

```tsx
import { Thoughtcast } from 'react-thoughtcast';

export function Status({ message }: { message: string }) {
  return <Thoughtcast value={message} mode="slide-up" />;
}
```

## Props

| Prop        | Type             | Default      | Description                          |
| ----------- | ---------------- | ------------ | ------------------------------------ |
| `value`     | `string`         | —            | The text to display. Required.       |
| `mode`      | `AnimationMode`  | `'slide-up'` | Transition style (see below).        |
| `duration`  | `number`         | `220`        | Animation duration in ms.            |
| `className` | `string`         | —            | Extra class applied to the wrapper.  |

### Animation modes

`slide-up` · `slide-down` · `crossfade` · `flip` · `blur` · `scale`

## Status

This is a 0.x release. Things that may change without notice:

- Prop names and defaults
- CSS class names (`thoughtcast-*`)
- The set of available animation modes

Feedback and issues are welcome while the API settles.

## License

MIT
