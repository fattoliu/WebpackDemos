<template>
    <div id="glq">
        <div>
            <input v-model.number="price" />{{price | currency() }}
            <hr>
            <div>
                <input v-model="length">mm
                {{length | meter('m')}}
            </div>
        </div>
    </div>

</template>
<script>
export default {
  name: 'glq',
  // 数据
  data() {
    return {
      price: 10,
      length: 10
    }
  },
  // 方法
  methods: {
    test() {
      var name = 'wanghuahua'
      var array = [
        {
          key: 1,
          value: 'wanghuahua'
        },
        {
          key: 2,
          value: 'shuandan'
        },
        {
          key: 3,
          value: 'limeimei'
        }
      ]
    }
  },
  // 过滤器
  filters: {
    currency: function(val, unit) {
      val = val || 0
      unit = unit || '元'
      return '这是通过过滤器添加的价格：' + val + unit
    },
    meter: function(val, unit) {
      val = val || 0
      unit = unit || 'm'
      return (val / 1000).toFixed(2) + unit
    }
  }
}
</script>
<style lang="scss" scoped>
</style>