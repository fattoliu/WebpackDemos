<template>
  <div>
    <basic-syntax />
    <for-looper />
    <bind />
    <on />
  </div>
</template>

<script>
// 局部注册组件
import BasicSyntax from './components/基础语法'
import ForLooper from './components/v-for指令'
import Bind from './components/v-bind指令'
import On from './components/v-on指令'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    BasicSyntax,
    ForLooper,
    Bind,
    On
  }
}
</script>

<style>
</style>
