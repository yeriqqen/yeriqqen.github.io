---
title: "astro-defineCollection"
description: "Content Collections"
pubDate: 2025-07-20
---
## Content Collections
```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```
