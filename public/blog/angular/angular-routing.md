---
title: "angular routes"
description: "Angular routes"
pubDate: 2025-07-31
featured: false
---

Loads js only at current page

app.routes.ts:

```ts
import { Routes } from '@angular/router';

export const routes: Routes = {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component.html').then(m => module.HomeComponent);
    }
}
```

So basically now home component is in the router outlet and can be removed from the app component.