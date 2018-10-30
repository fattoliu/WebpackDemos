<template>
  <div id="vFor">
    <h3>今日菜价</h3>
    <ul>
      <li v-for=" food in foodList">{{food.name}}:&nbsp;
        ￥{{food.discount ? food.price * food.discount : food.price}}元</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'vFor',
  data() {
    return {
      foodList: [
        {
          name: '大葱',
          price: '2.6',
          discount: 0.8
        },
        {
          name: '青菜',
          price: '5',
          discount: 0.5
        },
        {
          name: '猪肉',
          price: '18.5'
        }
      ]
    }
  }
}
</script>
<style>
</style>
