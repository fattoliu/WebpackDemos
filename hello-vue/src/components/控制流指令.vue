<template>
    <div id="control">
        <div v-if="role == 'admin'">
            管理员你好
        </div>
        <div v-else-if="role == 'hr'">
            待查看简历列表：<br>
            ...
        </div>
        <div v-else>
            您没有权限访问此页面
        </div>
    </div>
</template>
<script>
export default {
  name: 'control',
  data() {
    return {
      role: 'hr'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>