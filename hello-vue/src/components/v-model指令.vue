<template>
    <div id="vModel">
        <input type="text" v-model="name">
        {{name}}
        <br>
        <!-- 惰性更新 -->
        <input type="text" v-model.lazy="lazyName">
        {{lazyName}}
        <br>
        <!-- 去空格,注意：输密码时不能用 trim -->
        <input type="text" v-model.trim="trimName">
        <!-- 由于 html只解析一个空格，所以无论输入多少个空格
        显示就只显示一个空格，pre 标签可以展示多个空格 -->

        <br>
        <!-- 价格、年龄等用数字表示的值 -->
        <input type="text" v-model.number="price">
        {{typeof price}} : {{price}}
        <br>
        <br>
        <hr>
        <br>
        <label>
            男
            <input v-model="sex" value="male" type="radio">
        </label>
        <label>
            女
            <input v-model="sex" value="female" type="radio">
        </label>
        <br>
        {{sex}}
        <br>
        <br>
        <label>
            男
            <input v-model="sex_checkbox" value="male" type="checkbox">
        </label>
        <label>
            女
            <input v-model="sex_checkbox" value="female" type="checkbox">
        </label>
        <br>
        {{sex_checkbox}}
        <br>
        <textarea v-model="article"></textarea>
        <br>
        <div>你来自哪里？</div>
        <select v-model="from">
            <option value="kaihua">开化</option>
            <option value="hangzhou">杭州</option>
            <option value="china">中国</option>
            <option value="earth">地球</option>
        </select>
        {{from}}
        <br>
        <div>你要去哪里？</div>
        <select v-model="dist" multiple>
            <option value="hongkong">香港</option>
            <option value="island">冰岛</option>
            <option value="fenlan">芬兰</option>
            <option value="danmai">丹麦</option>
        </select>
        {{dist}}
    </div>
</template>
<script>
export default {
  name: 'vModel',
  data() {
    return {
      name: 'wanghuahua',
      lazyName: 'limeimei',
      trimName: 'zhanghonghong',
      price: 18.5,
      sex: 'female',
      sex_checkbox: ['male'],
      article: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      from: 'hangzhou',
      dist: ['hongkong', 'island']
    }
  }
}
</script>
<style lang="scss" scoped>
pre {
  display: inline;
}
hr {
  border: 1px solid skyblue;
}
</style>