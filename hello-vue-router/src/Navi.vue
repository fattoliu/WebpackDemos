<template>
    <div id="navi">
        <router-link to="/">首页</router-link>
        <router-link to="/login"> 登录</router-link>
        <router-link to="/post">帖子管理</router-link>
        <router-link to="/a">A</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'Navi',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
</style>