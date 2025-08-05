---
title: "design fsd"
description: "FSD folder structure design"
pubDate: 2025-08-05
---
## Feature-Sliced design

Here is a simple project that implements FSD:

```bash
📁 app
📁 pages
📁 shared
```

These top-level folders are called layers. Let's look deeper:

```bash
📂 app
    📁 routes
    📁 analytics
📂 pages
    📁 home
    📂 article-reader
    📁 ui
        📁 api
        📁 settings
📂 shared
    📁 ui
    📁 api
```

Folders inside 📂 pages are called slices. They divide the layer by domain (in this case, by pages).

Folders inside 📂 app, 📂 shared, and 📂 pages/article-reader are called segments, and they divide slices (or layers) by technical purpose, i.e. what the code is for.

![visual_schema-e826067f573946613dcdc76e3f585082](https://github.com/user-attachments/assets/84890549-69e0-4d55-9fb7-e38a0c37e4ed)

App — everything that makes the app run — routing, entrypoints, global styles, providers.
Pages — full pages or large parts of a page in nested routing.
Widgets — large self-contained chunks of functionality or UI, usually delivering an entire use case.
Features — reused implementations of entire product features, i.e. actions that bring business value to the user.
Entities — business entities that the project works with, like user or product.
Shared — reusable functionality, especially when it's detached from the specifics of the project/business, though not necessarily.
