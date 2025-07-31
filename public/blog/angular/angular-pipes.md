---
title: "angular pipes"
description: "Angular Pipes"
pubDate: 2025-07-31
featured: false
---

Angular pipes are used to transform data right in the templates

Used to change format of the data

Usage:

```ts
// any component
...
imports: [ UpperCasePipe ],
```

```html
<p>{{ object.title | uppercase }}</p>
```

If pipe takes two arguments: 

```html
<p>{{ object.title | uppercase : label }}</p>
```

Custom pipes:

```bash
ng g pipe pipes/filter-todos
```