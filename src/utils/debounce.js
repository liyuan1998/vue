function throttle(bindObj, fn, delay) {
  bindObj.$$prevTime = Date.now()
  return function(...args) {
    const nowTime = Date.now()
    if (nowTime - bindObj.$$prevTime > delay) {
      fn.apply(this, args)
      bindObj.$$prevTime = nowTime
    }
  }
}

function debounce(bindObj, fn, delay) {
  return function(...args) {
    bindObj.$$timer && clearTimeout(bindObj.$$timer)
    bindObj.$$timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

export {
  debounce,
  throttle
}
