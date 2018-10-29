<template>
  <div id="for_loop">
    <ul v-for="child in children">
      <li>{{child}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'forLooper',
  data() {
    return {
      children: ['多多', '禾禾', '美美']
    }
  }
}
</script>
<style>
</style>
