---
title: "Introduction to Reactive Programming"
classification: ["Reactive"]
tags: ["ANGULAR", "RX-JS", "THEORY"]
level: 100
date: "2020-05-10"
---

Since I've started working with Angular, `RxJS` has been one of those things that's baffled me and amazed me at the same
time. Being habituated to imperative programming for the better part of my life as a programmer and thinking in Reactive
and digesting the plethora of concepts that comes with it can be a little challenging. In this article, I will try to
break down what `RxJS` is and understand basic concepts such as Observables, Observers, Subscriptions etc.

### What is RxJS?

Simply put, it's a programming paradigm. A programming paradigm is basically a way of thinking about code, or a way of
writing code. You might have heard of and possibly used some popular programming paradigms such as imperative or
procedural programming, object-oriented programming, and functional programming. Like functional programming, reactive
is a declarative programming paradigm. Declarative is basically a style where programs describe the logic of a
particular computation rather than explicitly stating the control flow or sequence of steps that must be performed.

Reactive is primarily concerned with asynchronous data streams called Observables. A reactive application will “react”
to “events”. For example, when a user clicks a button, this is an event, and your application can react to it.
Observables are an alternative to promises, and in many ways they can be similar but also very different. I’m not
planning on going into detail about the similarities and differences between the two but rather just focus on explaining
Observables and other core concepts associated with RxJS.

Before working with RxJS, you must be familiar with the following concepts which we will cover in this lesson. We will
first talk about Data Streams or Observables with a real world example and explain what Observers and Subscriptions are
in this context and how operators can be used to manipulate data streams. We will also look at these concepts in the
form of Marble Diagrams which are a very popular way of representing and understanding the reactive programming model.
We will conclude this lesson by briefly touching upon Hot & Cold Observables. In subsequent lessons, I will try to go into
depth about using the various operators with code examples so that you can understand this programming paradigm better.

### What are Observables / Data Streams?

![GCP Youtube Channel](./gcp.png)

Now, let's talk about data streams. A data stream in RxJS is also called an Observable. A data stream is something that
emits events/data over some time. You can listen to a stream, through a process called subscription, and you can react
to a particular event by performing an action. Hence, the term, Reactive Programming.

Let me try to simplify this explanation by using a real world example. Take for example, a youtube channel. In this
case, we have the channel for Google Cloud Platform. Thinking about it from a reactive perspective, a youtube channel is
the data stream or the observable. Over time, different videos will be uploaded to the channel, and you can think of each
of these uploads as an event. An event of the type video upload.

The important thing to note here is that not everyone gets this notification of the event of a video upload. As a user,
you have to subscribe to the channel in order to get notified of these events. So, you and I, are what is called an
Observer in this paradigm. And as an Observer, you have to subscribe to the Observable (in this case the youtube
channel) in order to listen to events. Once you are made aware of a particular event you can react to it. So, for
example, you can react by clicking on the video and watching it.
