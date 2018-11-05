
<template>
  <div id="ComponentCommunity">
    <button @click="on_click">弹弹弹</button>
    <a :href="/user/ + username">@{{username}}</a>
    <button @click="onChildClick(true)">显示余额</button>
    <button @click="onChildClick(false)">隐藏余额</button>
  </div>
</template>
<script>
export default {
  name: 'ComponentCommunity',
  data() {
    return {}
  },
  /* 
    传值：  string number boolean
    传引用： array object，如果一处发生变更，所有引用到的地方都会发生变化
  
  */
  // 父组件--->子组件传参,属性传值,但这个写法不严谨，推荐下面官方写法
  // props: ['msg', 'username'],
  props: {
    msg: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  methods: {
    on_click: function() {
      alert(this.msg)
    },
    onChildClick: function(show) {
      /* $emit 用于注册一个事件，此处事件名称为：show_balance */
      this.$emit('show-balance', { a: 1, b: 2, c: show })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>