---
title: The Rust async fragmentation - slice n dice
date: "2024-11-29"
description: How the Rust ecosystem got split up because of async
---

## (Historical) Context

When Rust was still before v1.0, a big debate and what also changed the language heavily was the discussion on how to solve concurrency and I/O. The original solution consisted of green threads, and any piece of code from the standard library could be used in an OS thread or a green thread. The Rust runtime took care of things.

However, the Runtime and green threads got removed in favor of OS threads. Rust is supposed to be a systems language after all, and a hefty runtime is not viable, especially when it is embedded in other code, like e.g. in Firefox.

Instead, the Rust ecosystem settled on a different abstraction: Promises, or in Rust-Speak: Futures. A future is effectively a state machine, whose state can be polled with the `poll`-function. The poll function returns the current state of execution, which can have two states, `Pending` and `Ready` (represented by the `Poll` type).

An async runtime provides an executor, which queues and polls these futures. Another abstraction, the waker, tells the runtime when to poll the futures. The runtime is not provided by the standard library and can be specific to the environment, like in C++. This sounds useful: e.g. [the Zed editor uses its own async runtime that integrates with the macOS event loop](https://zed.dev/blog/zed-decoded-async-Rust) and there are [specific low-level async frameworks that are easy on resources](https://github.com/embassy-rs/embassy).

Since futures are self-contained, they are significantly cheaper than traditional green threads.

Sounds nice, right?

But.

## The foul side

The introduction of this zero-cost abstraction didn't come with zero cost.

Although the ecosystem has largely settled on the `tokio` runtime, this introduced a significant amount of fragmentation: crates have to support `async-std`, `tokio` and synchronous calls. Since its (nearly) impossible, to support all possible execution models and executors, most compromise: Some crates work exclusively with `tokio`, and others just provide an async implementation and solve the [function coloring problem](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/) by importing a runtime and blocking on the future (e.g. [reqwest](https://docs.rs/reqwest/latest/reqwest/blocking/index.html)). And it's not like there's not already enough dependencies in every project. Supply chain attacks are a real issue, and this only makes it worse.

This fragmentation also extends to the standard libraries. I'm talking in plural because every async runtime necessarily implements its own, slightly incompatible I/O interface. So, instead of two standard libraries theres now at least three, and presumably more.

Another problem is that futures don't play nicely with Rusts move semantics. The Rust compiler expects by default to be able to move memory wherever he wants. However if a future is pointing to something in memory or is assigned to a thread, it has to stay in place. The taped-on solution: `Pin<T>`.

The Pin type effectively declares: this value is fixed at this place in memory. Don't move it. Using it, however is extremely unergonomic and hard to understand for beginners. It feels bolted on and foul.

Futures also don't abstract well over new-ish I/O interfaces. `io_uring`, the new linux interface for batching I/O calls with ring buffers, is like a one-way road: when an operation is in the outbound buffer, it is going to happen. The expected behaviour is that when a future goes out of scope / is dropped, is that the underlying operation gets cancelled. In this case it doesn't, the result just of the operation just goes into nirvana.

So what's the way forward? The ecosystem cruft is already too deep. There's no way out of this. Rust can't have a big standard runtime, because it needs to serve everyones needs, from low level wizards to soydev sorcerers.

IT leaves you with no choice, but to always dig your own hole. The only thing you can decide is how to decorate it.
