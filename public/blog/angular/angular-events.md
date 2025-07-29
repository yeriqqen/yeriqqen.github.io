---
title: "angular events"
description: "Angular event listeners"
pubDate: 2025-07-29
featured: false
---

Angular event listeners:

```html
<input type='text' (keyup)="keyUpHandler($event)">
```

Custom events:

```ts
import { Component, signal } from '@angular/core';

@Component({
    ...,
    template: `
    <div>{{ myVar() }}</div>
    `
})
class MyComponent {
    @Output eventName = new EventEmitter<string>;

    someEventHandler() {
        this.eventName.emit('event happened');
    }
}
```

```html
<app-component (eventName)="onChildEvent($event)"/>
```

```ts
onChildEvent(data: string) {
    console.log(data);
}
```