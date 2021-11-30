// 让我嗯能用函数调用的方式创建Message组件
import Vue from 'vue'
import Message from './index.vue'

const Builder = Vue.extend(Message)
function toCreateMessage(options) {
  const mountNode = new Builder({
    render: (h) => {
      return (
        <Message
          props={{ ...options }}
        />
      )
    }
  })
  document.body.appendChild(mountNode.$mount().$el)
  setTimeout(() => {
    console.log('remove el')
    document.body.removeChild(mountNode.$mount().$el)
  }, 3000)
}

export {
  toCreateMessage
}
