<template>
    <div id="panel">
        <div class="title">
            <slot name="title">
            </slot>
        </div>
        <div class="content">
            <!-- 改成插槽，可让数据变成动态 -->
            <slot name="content"></slot>
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->
        </div>
        <div class="footer">
            <slot name="footer">
                <!-- 可以添加默认信息 -->
                默认 footer
            </slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'panel-tpl',
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#panel {
  max-width: 300px;
  border: 1.5px solid darkgreen;
  margin-bottom: 10px;
}
#panel > * {
  padding: 15px;
  text-align: center;
}
#panel .title {
  border-bottom: 1.5px solid darkgreen;
}
#panel .footer {
  border-top: 1.5px solid darkgreen;
}
</style>