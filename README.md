Project Monopoly
===========

Writing the **poly**morphic JavaScript code that executes at **mono**morphic speed.

Better JavaScript polymorphism, in user-space.



Motivation
========== 

As you may know, "native" polymorphism in `v8` is limited to 4 object shapes only. So, for example, 
if you have some base class and created several subclasses, while you instantiate only 4 of them,
your code be compiled by `v8` as "polymorphic" and will be JIT optimized with minimal overhead.  

Once you will start instantiating the 5fth subclass, code will become "megamorphic" and will be switched
to generic methods of JavaScript interpreter, instead of JIT. Performance will drop significantly.

This is a well-known problem, reported in 2017 and nothing has changed since. Considering that `v8` 
also does not optimize the `super` calls, we can conclude, that class inheritance is an 
anti-pattern in `v8`, performance-wise.  

Background information:

[One of the early discussions about this problem](https://groups.google.com/g/v8-users/c/qhK1zwUQFeU/m/g58rUC3mBQAJ)

[Ticket for `v8`](https://bugs.chromium.org/p/chromium/issues/detail?id=1137792)

[Access to "super" is not optimized](https://bugs.chromium.org/p/v8/issues/detail?id=9237)


Goals
=====

The main goal of this project is to find some (non-idiomatic) way of writing polymorphic JavaScript code, that executes
at monomorphic speed. 

This is not a novel problem, and it is already solved in many languages with "vtables" or code specialization. 

Other goals:

- Support multiple inheritance
- Support TypeScript typization
- Be close to metal as much as possible (zero-cost abstraction)

Most probably the result of this project will be a TypeScript transformer.


Status
======

No code is written yet, only benchmarks.



COPYRIGHT AND LICENSE
=================

MIT License

Copyright (c) 2020 Nickolay Platonov
