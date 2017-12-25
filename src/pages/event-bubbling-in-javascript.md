---
title: "Event bubbling in Javascript"
description: "Javascript's very own Bubble Wrap™ implementation (unofficial)"
date: "2017-12-26"
slug: "event-bubbling-in-javascript"
previous: "what-is-react-asynccomponent"
---

I'll be honest here. I didn't specifically search for "event bubbling in javascript" on Google (nobody uses Yahoo) and decide to write about it. I was going through [Wesbos](https://goo.gl/u9p5ZN)' ["Javascript30"](https://goo.gl/BDYzAe) course. Video #25 was (and still is) titled "Event Capture, Propogation, Bubbling and Once". I was mainly intrigued by the term "bubbling". I also didn't know what "once" in the title meant. So I decided to dig up and read about it.

I will try to explain bubbling through an example and simple terms. Let's say you have a `<div>` of class `grandChild` being wrapped by a `<div>` of class `child` and `<div>` of class `parent`. 
```html
<div class="event-bubbling">
   <h4>Event bubbling example</h4>
   <div class="parent" onclick="alert('PARENT')">
       <div class="child" onclick="alert('CHILD')">
           <div class="grandChild" onclick="alert('GRANDCHILD')">
               Click me
           </div>
       </div>
   </div>
</div>
```
When you click on "Click me", three alerts are shown - "GRANDCHILD", "CHILD" and "PARENT". Bubbling is basically when you poke the "GRANDCHILD" `<div>` and he / she starts crying, the "CHILD" and the "PARENT" `<div>s` get to know about it. But if you somehow manage to calm the kid down, the "CHILD" and the "PARENT" `<div>s` need not know about this little "incident" and everybody lives happily ever after. You basically "stopped" an "event" from "propagating" from the inner-most element to the outermost element or the document object. You achieve that by calling "event.stopPropagation()" after what you intended to do.

```html
<div class="event-bubbling-prevention">
   <h4>Event bubbling prevention example</h4>
   <div class="parent" onclick="alert('PARENT')">
       <div class="child" onclick="alert('CHILD')">
           <div class="grandChild" onclick="alert('GRANDCHILD'); event.stopPropagation();">
               Click me
           </div>
       </div>
   </div>
</div>
```

I have created a [CodePen](https://goo.gl/S8dPLB) for demonstration purposes.

Stopping event propagation must not be done lightly. There are costs associated with it. This [CSSTricks post](https://css-tricks.com/dangers-stopping-event-propagation/) explains the dangers associated, in depth.

References - 
* https://javascript.info/bubbling-and-capturing
* https://www.sitepoint.com/event-bubbling-javascript/