<template>
    <div id="app">
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/user/王花花">王花花</router-link>
        <router-link to="/user/栓蛋?age=20">栓蛋</router-link>
        <button @click="surf">漫游</button>
        <router-view name="main"></router-view>
        <hr>
        <hr>
        <router-link to="/role">权限管理</router-link>
        <router-view name="sidebar"></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    surf: function() {
      var $route = this.$router
      setTimeout(function() {
        $route.push('/about')
        setTimeout(function() {
          $route.push({ name: 'user', params: { name: 'fatooliu' } })
        }, 2000)
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
router-link {
  display: block;
}
</style>
