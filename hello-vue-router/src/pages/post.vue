<template>
    <div id="post">
        <h1>帖子管理</h1>
        <router-link to="/post/rain">后座</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'post',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
</style>