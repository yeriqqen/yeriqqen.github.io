---
title: "vue events"
description: "Event Handling"
pubDate: 2025-07-26
featured: false
---

Event Handling:

Inline:

```html
<button v-on:click='counter += 1'>{{ counter }}</button>
```

same as:

```html
<button @click='counter += 1'>{{ counter }}</button>
```

Method:

```html
<button @click='incrementCounter'>{{ counter }}</button>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter() {
            this.cart += 1
        }
    }
});
app.mount('#app');
```

Listen to native events on a custom component:
```html
<my-component @click.native="handleClick" />
```

Modifiers for event behaviour control:
```md
.once, .capture, .self, .stop, .prevent, .passive
```
```html
<button @click.once.prevent="submit">Submit</button>
```

Events:

```html
<!-- Mouse Events -->
<button @click="..."></button>
<button @dblclick="..."></button>
<button @mousedown="..."></button>
<button @mouseup="..."></button>
<button @mouseenter="..."></button>
<button @mouseleave="..."></button>
<button @mouseover="..."></button>
<button @mouseout="..."></button>
<button @mousemove="..."></button>
<button @contextmenu="..."></button>

<!-- Keyboard Events -->
<input @keydown="...">
<input @keyup="...">
<input @keypress="..."> <!-- Deprecated -->

<!-- Input & Form Events -->
<input @input="...">
<input @change="...">
<input @focus="...">
<input @blur="...">
<form @submit="..."></form>
<form @reset="..."></form>
<input @select="...">

<!-- Composition Events -->
<input @compositionstart="...">
<input @compositionupdate="...">
<input @compositionend="...">

<!-- Clipboard Events -->
<input @copy="...">
<input @cut="...">
<input @paste="...">

<!-- Drag & Drop Events -->
<div @drag="..."></div>
<div @dragstart="..."></div>
<div @dragend="..."></div>
<div @dragenter="..."></div>
<div @dragover="..."></div>
<div @dragleave="..."></div>
<div @drop="..."></div>

<!-- Touch Events -->
<div @touchstart="..."></div>
<div @touchmove="..."></div>
<div @touchend="..."></div>
<div @touchcancel="..."></div>

<!-- Pointer Events -->
<div @pointerdown="..."></div>
<div @pointerup="..."></div>
<div @pointermove="..."></div>
<div @pointerover="..."></div>
<div @pointerout="..."></div>
<div @pointerenter="..."></div>
<div @pointerleave="..."></div>
<div @pointercancel="..."></div>

<!-- Focus Events -->
<input @focusin="...">
<input @focusout="...">

<!-- Media Events -->
<video @abort="..."></video>
<video @canplay="..."></video>
<video @canplaythrough="..."></video>
<video @durationchange="..."></video>
<video @emptied="..."></video>
<video @ended="..."></video>
<video @error="..."></video>
<video @loadeddata="..."></video>
<video @loadedmetadata="..."></video>
<video @loadstart="..."></video>
<video @pause="..."></video>
<video @play="..."></video>
<video @playing="..."></video>
<video @progress="..."></video>
<video @ratechange="..."></video>
<video @seeked="..."></video>
<video @seeking="..."></video>
<video @stalled="..."></video>
<video @suspend="..."></video>
<video @timeupdate="..."></video>
<video @volumechange="..."></video>
<video @waiting="..."></video>

<!-- UI Events -->
<div @scroll="..."></div>
<window @resize="..."></window>

<!-- Wheel Events -->
<div @wheel="..."></div>

<!-- Animation Events -->
<div @animationstart="..."></div>
<div @animationend="..."></div>
<div @animationiteration="..."></div>

<!-- Transition Events -->
<div @transitionstart="..."></div>
<div @transitionend="..."></div>
<div @transitionrun="..."></div>
<div @transitioncancel="..."></div>
```