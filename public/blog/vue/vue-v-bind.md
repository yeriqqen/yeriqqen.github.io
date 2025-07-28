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

Style binding:

```html
<div :style={ backgroundColor: item.color }></div>
```

Same as:

```html
<div :style={ 'background-color': item.color }></div>
```

Or:

```html
<div :style="styles"></div>
```

js:

```js
const app = Vue.createApp({
    data() {
        return {
            image: './image.png'
            item: {
                name: 'Tree',
                color: 'green'
            },
            styles: {
                backgroundColor: 'green',
                fontSize: '24px'
            }
        }
    }
});
app.mount('#app');
```

Class binding:

```html
<div :class={ active: isActive }></div>
```

Same as:

```html
<div :class=[ isActive? active : '']></div>
```