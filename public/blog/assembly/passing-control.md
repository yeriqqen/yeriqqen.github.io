---
title: "passing control"
description: "Stack control passing"
pubDate: 2026-04-27
featured: false
---

Stack is used to support call and return

%rip - register containing current instruction

Call:
```as
callq label
```
equivalent, but not same sequence
```as
pushq %rip+7
# Save return address (address of next instruction)
jmp label
# Jump to label
```
Push return address on stack
Jump to label

Return:
```as
ret
```
Pop address from the stack
Jump to the address