---
title: "vue v-for:"
description: "List rendering"
pubDate: 2025-07-27
featured: false
---

Conditional rendering:

```html
<ul>
    <li v-for='element in elements'>{{ element }}</li>
</ul>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            elements: ['1', '2', '3']
        }
    }
});
app.mount('#app');
```

Another example with an array of objects:

```html
<ul>
    <li v-for='element in elements' :key='element.id'>{{ element.color }}</li>
</ul>
```

:key attribute gives each DOM element a unique key

js:

```js
const app = Vue.createApp({
    data() {
        return {
            elements: [
                { id: 1, color: 'white' },
                { id: 2, color: 'black' }
            ]
        }
    }
});
app.mount('#app');
```