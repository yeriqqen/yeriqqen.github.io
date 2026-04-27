---
title: "stack push pop"
description: "Stack control"
pubDate: 2026-04-27
featured: false
---

x86-64 stack:

%rsp - register containing stack pointer

Push:
```s
pushq Src
```
same as
```s
subq $8, %rsp
#decrement %rsp by 8
#since stack pointer is pointing to the bottom of the stack, it will now point to the next addresss
movq %rbp, (%rsp)
#write operand at address given by %rsp
```

Pop:
```s
popq Dest
```
same as
```s
movq (%rsp), %rax
#read the value at address given by %rsp
addq $8, %rsp
#increment %rsp by 8
```