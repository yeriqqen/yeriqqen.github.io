---
title: "vue v-bind:"
description: "Atrribue binding"
pubDate: 2025-07-26
featured: false
---

Attribute binding:

```html
<div v-bind:src='image'></div>
```

same as:


```html
<div :src='image'></div>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            image: './image.png'
        }
    }
});
app.mount('#app');
```