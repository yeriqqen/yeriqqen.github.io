---
title: "vue v-if:"
description: "Conditional rendering"
pubDate: 2025-07-26
featured: false
---

Conditional rendering:

```html
<div v-if='true'></div>
<div v-if='isTrue'></div>
<div v-else-if='!isTrue'></div>
<div v-else></div>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            isTrue: true
        }
    }
});
app.mount('#app');
```