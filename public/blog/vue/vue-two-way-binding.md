---
title: "vue v-model"
description: "Two way data binding"
pubDate: 2025-07-26
featured: false
---

Input data binding:

```html
<input v-model='name'>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            name: ''
        }
    }
});
app.mount('#app');
```