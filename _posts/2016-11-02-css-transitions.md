---
layout: post
title: Experimenting with CSS Transitions
---

In case you hadn't heard, adding animation is rather simple with CSS. You don't need jQuery or Javascript these days to make it happen.

```css
/*
.div {
  transition: <transition-duration> <transition-property> <transition-timing-function> <transition-delay>
}
*/

/* Example */

.div {
  transition: 100ms 500ms width ease;
}
```

In the example above:

* `500ms` is the amount of time it will take to complete the transition (500ms == 0.5s)
* `width` is the property we want to transition
* `ease` is the timing function, ease being the default which starts slow, then fast, then ends slow
* `100ms` is the amount of time it will delay before starting (100ms == 0.1s)

### Codepen experiment for a sidebar transition

In [DC/OS](http://dcos.io) we have a flow for creating a new service. In this flow you can toggle in "JSON Mode" at which point a text editor slides in. For the purposes of experimenting across the team with different speeds and techniques I put together this Codepen.

<p data-height="465" data-theme-id="0" data-slug-hash="gwQojK" data-default-tab="result" data-user="leemunroe" data-embed-version="2" data-pen-title="CSS Transitions Experiment" class="codepen">See the Pen <a href="http://codepen.io/leemunroe/pen/gwQojK/">CSS Transitions Experiment</a> by Lee Munroe (<a href="http://codepen.io/leemunroe">@leemunroe</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

There's a custom option in there where you can try your own timing function and speed e.g.

* `ease-in-out 400ms`
* `cubic-bezier(.17,.67,.83,.67) 1000ms`
* `cubic-bezier(.05,.34,.96,.67) 400ms`
* Get more examples from [cubic-bezier.com](http://cubic-bezier.com/)

### Some more advice on CSS transitions

Transitioning certain properties, such as left and margin causes the browser to recalculating styles every frame. This is fairly expensive, and can lead to unnecessary re-paints, especially if you have a lot of elements on the screen. [More about the pitfalls](https://blog.alexmaccaw.com/css-transitions) from Alex Maccaw.

Rather than sticking to the default timing functions, which can be "boring" as every animation then looks the same, consider using a custom `cubic-bezier` to manipulate your motion curve. [More about cubic-bezier](https://www.smashingmagazine.com/2016/08/css-animations-motion-curves/) on Smashing Magazine.

200ms to 500ms seconds is a good range to start with for interface animations. 100ms is perceived as instant. 1 second is the limit. [More about animation speed](http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/) from Val Head.
