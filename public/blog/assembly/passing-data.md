---
title: "Passing data"
description: "Passing data"
pubDate: 2026-04-27
featured: false
---

Stack is allocated only when needed: more than 6 arguments, arrays, etc.

%rax - register that stores the return value

```c
void multstore
    (long x, long y, long *dest)
{
    long t = mult2(x, y);
    *dest = t;
}
```

```as
0000000000400540 <multstore>:
    #x in %rdi, y in %rsi, dest in %rdx
    #...
    400541: mov     %rdx, %rbx      #save dest
    400544: callq   400550 <mult2>  # mult2(x,y)
    # t in %rax
    400549: mov     %rax,(%rbx)     # Save at dest
```

```c
long mult2
    (long a, long b)
{
    long s = a * b;
    return s;
}
```

```as
0000000000400550 <mult2>:
    # a in %rdi, b in %rsi
    400550: mov     %rdi,%rax   # a
    400553: imul    %rsi,%rax  # a * b
    # s in %rax
    400557: retq            # Return
```