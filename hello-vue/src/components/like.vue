<template>
    <div id="like">
        <button :class="{liked: liked}" @click="toggle_like">👍 {{like_count}}</button>
    </div>
</template>
<script>
export default {
  name: 'like',
  data() {
    return {
      like_count: 10,
      liked: false
    }
  },
  methods: {
    toggle_like: function() {
      if (!this.liked) {
        this.like_count++
      } else {
        this.like_count--
      }
      this.liked = !this.liked
    }
  }
}
</script>
<style lang="scss" scoped>
.liked {
  background-color: red;
}
</style>