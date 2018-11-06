<template>
    <div id="slot">
        <panel>
            <div slot="title">Yo.Slot</div>
            <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</div>
            <!-- <div slot="footer">更多信息</div> -->
        </panel>
    </div>
</template>
<script>
import panel from './panel'

export default {
  name: 'SlotDemo',
  data() {
    return {}
  },
  components: {
    panel
  }
}
</script>
<style lang="scss" scoped>
</style>