'use strict'

module.exports = (() => (typeof window !== undefined) ? {
  hasWheelEvent: 'onwheel' in document,
  hasMouseWheelEvent: 'onmousewheel' in document,
  hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
  hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
  hasPointer: !!window.navigator.msPointerEnabled,
  hasKeyDown: 'onkeydown' in document,
  isFirefox: navigator.userAgent.indexOf('Firefox') > -1
} : {})()
