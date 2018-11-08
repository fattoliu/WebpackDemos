<template>
    <div id="user">
        <div> 我叫：{{$route.params.name}}</div>
        <router-link v-bind:to="$route.params.name + '/more'">更多信息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'user',
  data() {
    return {}
  },
  created() {
    console.log(this.$router)
  }
}
</script>
<style lang="scss" scoped>
</style>