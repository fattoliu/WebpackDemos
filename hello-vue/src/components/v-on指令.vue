<template>
  <div id="vOn">
    <button v-on="{mouseenter:onEnter,mouseleave: onOut}" v-on:click="onClick">点我</button>
    <!-- <form v-on:submit="onSubmit($event)"> -->
    <!-- vue为 preventDefault也做了封装，因此可以这么写 -->
    <!-- 禁止冒泡事件 stopPropagation -->
    <form v-on:submit.prevent="onSubmit" v-on:submit.stop="onStopPropagation" v-on:keyup="onKeyup" v-on:keyup.enter="onEnterPressed">
      <input type="text">
      <button type="submit">提交</button>
    </form>

    <div>
      <div></div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'component_name',
  data() {
    return {}
  },
  methods: {
    onClick: function() {
      console.log('clicked')
    },
    onEnter: function() {
      console.log('mouse enter')
    },
    onOut: function() {
      console.log('mouse out')
    },
    onSubmit: function(/* e */) {
      // 禁止浏览器默认行为（默认会发送一个 get/post请求到指定页面）
      // e.preventDefault()

      console.log('new submited')
    },
    onStopPropagation: function() {
      console.log('on stop propagation')
    },
    onKeyup: function() {
      console.log('key pressed')
    },
    onEnterPressed() {
      console.log('enter button pressed')
    }
  }
}
</script>
<style>
</style>