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

https://feature-sliced.design/assets/images/visual_schema-e826067f573946613dcdc76e3f585082.jpg