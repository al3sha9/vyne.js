# Vyne.js

Vyne.js is a minimal reactive JavaScript framework built from scratch. It demonstrates the core ideas behind modern reactive systems like Vue.js and Solid.js, including reactive state, dependency tracking, and automatic effect re-running.

## Features

- Simple reactivity system using `reactive()`
- Dependency tracking with `track()` and `trigger()`
- Auto-updating effects via `createEffect()`
- Basic DOM rendering using `render()`
- Nested reactivity support

## Getting Started

### Include the Framework

Include `vyne.js` in your project:

```html
<script src="vyne.js"></script>
```

Or import it in your JavaScript file:

```js
import { reactive, track, trigger, createEffect, render } from 'vyne.js';
```
