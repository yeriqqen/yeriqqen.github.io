---
title: "angular props"
description: "Angular props"
pubDate: 2025-07-28
featured: false
---

Angular props:

```ts
import { Component, signal } from '@angular/core';

@Component({
    ...,
    template: `
    <div>{{ myVar() }}</div>
    `
})
class MyComponent {
    myVar = input('Default Value');
}
```

```html
<app-component [myVar]="'passed value'"/>
```