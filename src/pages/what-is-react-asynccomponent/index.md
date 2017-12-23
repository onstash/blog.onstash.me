---
title: "What is React.AsyncComponent?"
description: "Does anybody know what that is?"
date: "2017-12-24"
slug: "what-is-react-asynccomponent"
previous: "why-footyfollowr"
---

In the past week, I happened to stumble upon a class named "AsyncComponent" in Facebook's ReactJS [source code](https://github.com/facebook/react/blob/0280e93b1152d37b6b784dffbd04088c4e2dda90/packages/react/src/ReactBaseClasses.js#L141). I did some digging on my own. Turns out, [it](https://github.com/facebook/react/blob/0280e93b1152d37b6b784dffbd04088c4e2dda90/packages/react/src/ReactBaseClasses.js#L155) has a `prototype` called `unstable_isAsyncReactComponent` which indicates that this is unstable API and might change in the future.

I didn't understand what it was intended for. I wasn't and am not sure what it is and how & where it could be used. To answer this question, I decided to do what a lot of us do when we face tough questions - search Google and StackOverflow (and avoid Quora as much as possible). I was hoping for one of two things -  a detailed StackOverflow answer that's blurry at 3am or a Medium / blog post that's hopefully not clickbait. Turns out those weren't the droids I was looking for. So I opened up a [question](https://stackoverflow.com/q/47914273/3992797) on StackOverflow myself hoping for answers from people who know more about React's source.