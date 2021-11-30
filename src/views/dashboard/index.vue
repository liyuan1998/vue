<template>
  <div id="app">
    <el-input
      v-model="value"
      v-debounce="['keypress', printValue]"
      placeholder="anti-shake"
    />
    <div
      v-debounce="['mousemove', addNum]"
      class="box"
    >
      <h1>{{ num }}</h1>
    </div>
    <el-button @click="onClick">message</el-button>

  </div>
</template>

<script>
import { toCreateMessage } from '@/components/Message/message.js'

export default {
  data: () => ({
    value: '',
    num: 0
  }),
  methods: {
    onClick() {
      toCreateMessage({ title: '内容' })
    },
    addNum() {
      console.log(this.num)
      this.num++
    },
    printValue() {
      console.log(this.value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
	width: 100px;
	height: 100px;
	background: skyblue;
}
</style>
