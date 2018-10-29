<template>
  <div>
    <BasicSyntax />
    <ForLooper />
  </div>
</template>

<script>
import BasicSyntax from './components/基础语法'
import ForLooper from './components/for循环'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    BasicSyntax,
    ForLooper
  }
}
</script>

<style>
</style>
