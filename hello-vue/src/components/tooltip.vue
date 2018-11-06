<template>
    <div id="tooltip">
        <span @mouseenter="show" @mouseleave="hide">tooltips</span>
        <div v-if="visible">
            白岩松
        </div>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
import { base } from './mixins/base'
export default {
  name: 'tooltip',
  // 如果组件中也定义了 mixins 中含有的变量，则会覆盖 mixins 中定义的值
  data() {
    return {
      visible: true
    }
  },
  mixins: [base]
}
</script>
<style lang="scss" scoped>
</style>