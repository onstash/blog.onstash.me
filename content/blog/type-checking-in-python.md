---
title: "Type-checking in Python"
description: "Type-checking Function Arguments for Humans™"
date: "2018-06-06"
slug: "type-checking-in-python"
previous: "looking-back-at-2017"
next: "looking-back-at-2018"
---

Type checking function arguments is a common sanity check for function arguments in Python.

## What do you mean "type-checking function arguments"?

Let's say you have a function `add` that takes in two arguments `a` and `b`. There is an implicit understanding that `a` and `b` must be either integer (type `int`) or float (type `float`).

```python
def add(a, b):
    return a + b
```

`add(1, 2)` gives the output `3` which is what we intended the function for.
But `add([2], [3])` seems to be returning `[2, 3]`, a concatenated list.
Also `add((2,), (3,))` seems to be returning `(2, 3)`, a concatenated tuple.

To operate only on `int` and `float` arguments, we can add `type` or `isinstance` checks. Check out this [StackOverflow post](https://stackoverflow.com/questions/1549801/what-are-the-differences-between-type-and-isinstance) for understanding the difference between `type` and `isinstance` checks.

```python
valid_add_types = (int, float)
def add(a, b):
    if isinstance(a, valid_add_types) and isinstance(b, valid_add_types):
        return a + b
    return None
```

`add(1, 2)` gives the output `3` which is what we intended the function for.
`add([2], [3])` and `add((2,), (3,))` return `None` because they're are neither integers nor floats.

Pros:
* It can help you, the developer, understand what types of arguments a function needs at a glance
* Useful for existing and new developers
* Bug-fixes and feature additions are less painful

Cons:
* It is manageable for small codebases
* Manual type checking makes large codebases convoluted

In the course of discussing how to improve the Developer Experience (DX) of a Python developer, my mentor, Sriram, and I came with up with an idea of a type checking decorator for type checking function arguments.

Introducing [`typy_checker`](https://github.com/onstash/typy_checker), an easy-to-use library for type-checking your functions without losing your sanity over it.

Here is how we could use `typy_checker` in our example.

```python
from typy_checker import type_checker

valid_add_types = (int, float)
@type_checker(a=valid_add_types, b=valid_add_types)
def add(a, b):
    return a + b
```

Calling `add([2], [3])` will result in the following error - 

```
SystemError: add(): Invalid type for variable 'a'. Expected int / float but got list.
```

Using `typy_checker` results in a cleaner codebase, from my experience. I have used it in two codebases and they are running in production at the moment.
