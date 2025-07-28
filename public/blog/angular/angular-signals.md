---
title: "angular signals"
description: "Angular data binding with signals"
pubDate: 2025-07-28
featured: false
---

Angular data binding using signals:

```ts
import { Component, signal } from '@angular/core';

@Component({
    ...,
    template: `
    <div>{{ myVar() }}</div>
    `
})
class MyComponent {
    myVar = signal('some value');
}
```

Traditional data binding (myVar = 'some value') is not recommended