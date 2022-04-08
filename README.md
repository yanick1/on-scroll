# on-scroll

Simple wrapper for the Intersection Observer API

> import { OnScroll } from "./on-scroll";

> const fadeIn = new OnScroll(".fade-in", {
  classToggle: "visible",
})

## options
{number} threshold - 0 to 1 - how much the element is visible on screen (default 0.1) [View documentation](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

{string} rootMargin - margin (default '0px')  [View documentation](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

{string} classToggle - class to toggle once it's visible

{function} callback - callback function, called with IntersectionObserverEntry, IntersectionObserver 

{boolean} repeatAnimation - Set to true to repeat the animation once the element is back on screen (default false)
