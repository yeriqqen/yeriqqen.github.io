---
title: "swift basic"
description: "swift basics"
pubDate: 2025-08-12
---
## Views, modifiers

Example:

```swift
struct ContentView: View {
    var body: some View {

        Image("imageNameFromAssets")
            .resizable()
            .aspectRatio(contentMode: .fit)
            .cornerRadius(15)
    }
}
```