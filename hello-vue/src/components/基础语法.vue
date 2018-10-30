
<template>
    <div id="basicSyntax">
        <div>
            <input type="text" v-model="name"><span v-show="name">你的名字是：{{name}}</span>
        </div>
        <div>
            <input type="text" v-model="age"><span v-show="age">你的名字是：{{age}}</span>
        </div>
        <div>
            <input type="text" v-model="sex"><span v-show="sex">你的名字是：{{sex}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'basicSyntax',
  data() {
    return {
      name: null,
      age: null,
      sex: null
    }
  }
}
</script>

<style>
</style>
