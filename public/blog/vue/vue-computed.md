---
title: "vue computed"
description: "Computed Properties"
pubDate: 2025-07-28
featured: false
---

Computed Properties:

```html
<div>{{ title }}</div>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            name: 'Yestay',
            lastName: 'Yessenbay'
        }
    },
    computed: {
        titel() {
            return this.lastName + ' ' + this.name
        }
    }
});
app.mount('#app');
```