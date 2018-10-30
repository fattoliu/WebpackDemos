
/** 
  语法知识：
    v-bind:href....
    v-bind:src.....
    其中 v-bind可以省略：
      :href
      :src
*/

<template>
  <div id="vBind">
    <a :href="url">点我跳转到Baidu</a>
    <img :src="img" alt="">
    <a v-bind:class="klass" v-bind:href="url">绑定类</a>
    <!-- 
        语法：
          {class: 条件}
          class:类名

     -->
    <a v-bind:class="{active: isActive}" v-bind:href="url">isActive:{{isActive}}----> true 设置背景色为红色，false 不设置</a>
  </div>
</template>
<script>
export default {
  name: 'vBind',
  data() {
    return {
      url: 'http://www.baidu.com',
      img: 'https://dummyimage.com/100x100/ff0000/ffffff',
      klass: 'btn btn-default',
      isActive: false
    }
  }
}
</script>
<style>
a {
  display: block;
}
.active {
  background: red;
}
</style>
