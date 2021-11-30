import Vue from 'vue'
import { debounce, throttle } from '@/utils/debounce'

Vue.directive('debounce', {
  bind(el, binding, vnode) {
    const [emit, fn, delay = 1000] = binding.value
    el.addEventListener(emit, debounce(vnode, fn, delay))
  }
})

Vue.directive('throttle', {
  bind(el, binding, vnode) {
    const [emit, fn, delay = 1000] = binding.value
    el.addEventListener(emit, throttle(vnode, fn, delay))
  }
})
