---
title: "angular services"
description: "Angular services"
pubDate: 2025-07-31
featured: false
---

Angular Services are used to encapsulate data or perform any task that is not directly related to data rendering.

```bash
ng g service services/name-of-service
```

If a service is included in one or more components as a provider, it can be used only in those components. 

```ts
@Injectable({
    providedIn: 'root'; // To use the service in all components
})
```

To use a service in any component:
```ts
// some.component.ts
...export class SomeComponent {
    someService = inject(someServcie);
    serviceObjects = signal<Array<string>>([]); // Optional. To create a signal instead of using a variable
}