<template>
    <div id="calculateAttribute">
        <table border="1">
            <thead>
                <th>学科</th>
                <th>分数</th>
            </thead>
            <tbody>
                <tr>
                    <td>数学</td>
                    <td><input type="text" v-model.number="math"></td>
                </tr>
                <tr>
                    <td>物理</td>
                    <td><input type="text" v-model.number="physics"></td>
                </tr>
                <tr>
                    <td>英语</td>
                    <td><input type="text" v-model.number="english"></td>
                </tr>
                <tr>
                    <td>总分</td>
                    <td>{{sum}}</td>
                </tr>
                <tr>
                    <td>平均分</td>
                    <td>{{average}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: 'calculateAttribute',
  data() {
    return {
      math: 90,
      physics: 85,
      english: 60
    }
  },
  /* 计算属性的好处是会将计算的结果进行缓存，提高性能，而 methods则会每次都重新取计算 */

  computed: {
    sum: function() {
      return (
        parseFloat(this.math) +
        parseFloat(this.physics) +
        parseFloat(this.english)
      )
    },
    average: function() {
      return Math.round(this.sum / 3)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>