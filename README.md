# react-thoughtcast

> ⚠️ **Early stage / beta.** API may change. Use at your own risk in production.

Animated text components for React. Drop in a `<Thoughtcast>` and any time its `value` prop changes, the old text animates out and the new text animates in. Pair it with `<MarkdownTypewriter>` for character-by-character markdown rendering, or use `<Loader>` standalone for inline loading indicators.

## Install

```bash
npm install react-thoughtcast
```

`react` and `react-dom` (>=17) are peer dependencies. `react-markdown` and `remark-gfm` are optional peer dependencies required only if you use `<MarkdownTypewriter>`.

---

## Thoughtcast

Animates between string values whenever `value` changes.

```tsx
import { Thoughtcast } from 'react-thoughtcast';

<Thoughtcast value={status} mode="slide-up" />
```

### Props

| Prop              | Type                          | Default      | Description                                                  |
| ----------------- | ----------------------------- | ------------ | ------------------------------------------------------------ |
| `value`           | `string`                      | —            | Text to display. Required.                                   |
| `mode`            | `AnimationMode`               | `'slide-up'` | Transition style.                                            |
| `duration`        | `number`                      | `220`        | Animation duration in ms.                                    |
| `className`       | `string`                      | —            | Extra class on the root element.                             |
| `wrapper`         | `React.ComponentType<{value: string}>` | — | Custom render component for the text (see below).           |
| `loader`          | `LoaderType`                  | —            | Inline loading indicator shown before the text.              |
| `loaderColor`     | `string`                      | —            | Single color for the loader (any CSS color).                 |
| `loaderGradient`  | `[string, string]`            | —            | Two-stop left-to-right gradient for the loader. Hex only. Overrides `loaderColor`. |

### Animation modes

| Mode         | Description                        |
| ------------ | ---------------------------------- |
| `slide-up`   | Old text slides up out, new slides in from below |
| `slide-down` | Old text slides down out, new slides in from above |
| `crossfade`  | Simple opacity fade                |
| `flip`       | 3D rotation on the X axis          |
| `blur`       | Blur + fade out, then in           |
| `scale`      | Shrink out, grow in                |

### wrapper prop

Use `wrapper` to render the value through a custom component instead of plain text. The component receives `{ value: string }` and is re-rendered on every transition.

```tsx
<Thoughtcast
  value={status}
  mode="crossfade"
  wrapper={({ value }) => (
    <span className="badge">{value}</span>
  )}
/>
```

### Loader

Show an inline loading indicator alongside the animated text by setting `loader`:

```tsx
<Thoughtcast
  value={step}
  mode="slide-up"
  loader="typing"
  loaderColor="#5b5ef4"
/>
```

Use `loaderGradient` to colorize the loader with a two-stop gradient (overrides `loaderColor`):

```tsx
<Thoughtcast
  value={step}
  loader="spinner"
  loaderGradient={['#5b5ef4', '#D85A30']}
/>
```

---

## MarkdownTypewriter

Renders markdown character by character with a blinking cursor. Supports streaming mode for LLM output.

```tsx
import { MarkdownTypewriter } from 'react-thoughtcast';

<MarkdownTypewriter value={markdownString} speed={20} />
```

Requires `react-markdown` and `remark-gfm` as peer dependencies:

```bash
npm install react-markdown remark-gfm
```

### Props

| Prop         | Type         | Default | Description                                                              |
| ------------ | ------------ | ------- | ------------------------------------------------------------------------ |
| `value`      | `string`     | —       | Markdown string to render. Required.                                     |
| `speed`      | `number`     | `20`    | Milliseconds per character.                                              |
| `cursor`     | `boolean`    | `true`  | Show a blinking cursor while typing.                                     |
| `streaming`  | `boolean`    | `false` | When `true`, preserves playback position if `value` grows (append-only). Use for LLM token streaming. |
| `className`  | `string`     | —       | Extra class on the root element.                                         |
| `onComplete` | `() => void` | —       | Called when the last character has been typed.                           |

### Streaming mode

Set `streaming` when `value` is updated token by token (e.g. from an LLM stream). The component keeps its position in the string and continues typing forward instead of restarting from zero.

```tsx
<MarkdownTypewriter value={streamedMarkdown} speed={14} streaming />
```

---

## Loader

Use `<Loader>` standalone when you need a loading indicator without the text transition.

```tsx
import { Loader } from 'react-thoughtcast';

<Loader type="typing" color="#5b5ef4" />
```

### Props

| Prop        | Type               | Description                                                        |
| ----------- | ------------------ | ------------------------------------------------------------------ |
| `type`      | `LoaderType`       | Animation style. Required.                                         |
| `color`     | `string`           | CSS color for all elements.                                        |
| `gradient`  | `[string, string]` | Two-stop left-to-right gradient. Hex only. Overrides `color`.      |
| `className` | `string`           | Extra class on the root element.                                   |

### Loader types

| Type      | Description         |
| --------- | ------------------- |
| `typing`  | Three bouncing dots |
| `ripple`  | Pulsing ripple dots |
| `bounce`  | Bounce wave         |
| `morph`   | Morphing blob chain |
| `fade`    | Fade wave           |
| `spinner` | Arc spinner         |
| `spring`  | Boing spring dots   |
| `dna`     | DNA double helix    |

---

## Status

This is a 0.x release. Things that may change without notice:

- Prop names and defaults
- CSS class names (`thoughtcast-*`, `tc-loader-*`)
- The set of available animation modes and loader types

Feedback and issues are welcome while the API settles.

## License

MIT
