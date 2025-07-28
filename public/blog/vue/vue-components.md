---
title: "vue components"
description: "Components"
pubDate: 2025-07-28
featured: false
---

Given component:

```js
app.component('componentName', {
    props: {
        someProp: {
            type: Number,
            required: true
        }
    }
    template: 
    /*html*/
    `<div>This is a child component</div>`,
    // data, computed, methods...
    methods: {
        childMethod() {
            this.$emit('child-method')
        }
    }
})
```

Props and event handling:

```html
<componentName :someProp='5' @child-method="parentMethod"></componentName>
```