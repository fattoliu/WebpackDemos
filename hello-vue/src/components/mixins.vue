<template>
    <div id="Mixins">
        <popup />
        <tooltip />
    </div>
</template>

<script>
import tooltip from '../components/tooltip'
import popup from '../components/popup'

export default {
  name: 'Mixins',
  data() {
    return {}
  },
  components: {
    tooltip,
    popup
  }
}
</script>
<style lang="scss" scoped>
</style>