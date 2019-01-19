virtual-scroll
=====

Custom scroll event with inertia/momentum, touch and keyboard compatible.
> See this [article](http://www.everyday3d.com/blog/index.php/2014/08/18/smooth-scrolling-with-virtualscroll/) for the original authors description.

### Goals of the fork
- Support browser and commonjs environments
- Add SSR environment support
- Provide an example usage

### Installation
```
npm i @mecolela/virtual-scroll -S
```

### Usage & API

Return a new instance of VirtualScroll. See the options below.
```js
new VirtualScroll(options)
```

Listen to the scroll event using the specified function (fn) and optional context.
```js
instance.on(fn, context)
```

Remove the listener.
```js
instance.off(fn, context)
```

Will remove all events and unbind the DOM listeners.
```js
instance.destroy()
```

Events note:
Each instance will listen only once to any DOM listener.These listener are enabled/disabled automatically. However, it's a good practice to always call `destroy()` on your VirtualScroll instance, especially if you are working with a SPA.

### Options
| name   |   default     |  description |
|:----------|:-------------|:------|
| el |  window | the target element for mobile touch events |
| mouseMultiplier |  1  |  General multiplier for all mousewheel (including Firefox) |
| touchMultiplier   | 2 |  Mutiply the touch action by this modifier to make scroll faster than finger movement. |
| firefoxMultiplier | 15 |  Firefox on Windows needs a boost, since scrolling is very slow. |
| keyStep | 120 | How many pixels to move with each key press. |
| preventTouch | false | If true, automatically call `e.preventDefault` on touchMove. |
| unpreventTouchClass | vs-touchmove-allowed |  Elements with this class won't `preventDefault` on touchMove. For instance, useful for a scrolling text inside a VirtualScroll-controled element. |
| limitInertia | false | if true, will leverage [Lethargy](https://github.com/d4nyll/lethargy) to avoid everlasting scroll events (mostly on Apple Mouse, Trackpad, and free-wheel mouse). |
| passive | undefined | if used, will use [passive events declaration](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners) for the wheel and touch listeners. Can be true or false. |
| disableUserInput | false | if true, does not listen for scroll events  |

### License
MIT.
