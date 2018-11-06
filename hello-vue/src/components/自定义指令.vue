<template>
    <div id="CustomDirective">
        <div v-pin:true.bottom.right="pinned" class="card">
            <button @click="pinned = !pinned">钉住/取消</button>
            Lorem ipsum dolor sit amet, consectetur.
        </div>
        <div v-pin="false" class="card">
            Lorem ipsum dolor sit amet, consectetur.
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
</template>
<script>
export default {
  name: 'CustomDirective',
  data() {
    return {
      pinned: false
    }
  },
  directives: {
    pin: function(el, binding) {
      var position = binding.modifiers
      var pinned = binding.value
      var warning = binding.arg
      if (pinned) {
        el.style.position = 'fixed'
        for (var key in position) {
          el.style[key] = '10px'
        }

        if (warning === 'true') {
          el.style.background = 'yellow'
        }
      } else {
        el.style.position = 'static'
      }
    }
  },
  mixins: {}
}
</script>
<style lang="scss" scoped>
.card {
  width: 200px;
  background: #ccc;
  padding: 10px;
  margin: 5px;
}
button {
  background: green;
  color: white;
}
</style>