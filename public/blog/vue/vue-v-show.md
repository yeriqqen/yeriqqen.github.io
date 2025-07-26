---
title: "vue v-show:"
description: "Conditional visibility"
pubDate: 2025-07-26
featured: false
---

Conditional visibility:

```html
<div v-show='false'></div>
<div v-show='isTrue'></div>
```
even if they are not visible, they will still be rendered with display:none

js:

```js
const app = Vue.createApp({
    data() {
        return {
            isTrue: false
        }
    }
});
app.mount('#app');
```