---
title: "swift basic"
description: "swift basics"
pubDate: 2025-08-12
---
## Views, modifiers

<img width="1924" height="1178" alt="Screenshot 2025-08-12 at 5 36 12 PM" src="https://github.com/user-attachments/assets/643746ce-39c4-4971-abfe-5a45ae4354d9" />

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
