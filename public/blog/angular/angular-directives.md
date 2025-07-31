---
title: "angular directives"
description: "Angular directives"
pubDate: 2025-07-31
featured: false
---

Adds additional behavior to any elements

Types of directives:
• Components
• Attribute directives
• Structural directives

```bash
ng g directive directives/some
```

```ts
// some.directive.ts
import { Directive, input, effect, inject, ElementRef } from '@angular/core';
...
export class SomeDirective {
    isCompleted = input(false) // take as a input
    el = inject(ElementRef) // grabs the element that was interacted with
    stylesEffect = effect(() => {
        if (this.isCompleted) {
            //some code
        }
    })
}