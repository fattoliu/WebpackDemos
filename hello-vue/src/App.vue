<template>
  <div id="app">
    <basic-syntax />
    <for-looper />
    <bind />
    <on />
    <on-model />
    <control />
    <calculate-attribute />

    <parent-and-child-component-community @show-balance="showBalance($event)" v-bind:msg="msg" username="fattoliu"></parent-and-child-component-community>
    <div class="balance_block" v-if="show_balance">您的余额：{{balance}}亿</div>
    <div class="balance_block" v-else>余额很隐私Yo.</div>
    <like />
    <glq />

  </div>
</template>

<script>
// 局部注册组件
import BasicSyntax from './components/基础语法'
import ForLooper from './components/v-for指令'
import Bind from './components/v-bind指令'
import On from './components/v-on指令'
import OnModel from './components/v-model指令'
import Control from './components/控制流指令'
import CalculateAttribute from './components/calculateAttribute'
import ParentAndChildComponentCommunity from './components/子组件与父组件通信'
import Glq from './components/glq'
import Like from './components/like'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Yo.王花花！',
      show_balance: false,
      balance: 0
    }
  },
  components: {
    BasicSyntax,
    ForLooper,
    Bind,
    On,
    OnModel,
    Control,
    CalculateAttribute,
    ParentAndChildComponentCommunity,
    Glq,
    Like
  },
  methods: {
    showBalance: function(obj) {
      this.show_balance = obj.c
      this.balance = obj.a + obj.b
    }
  }
}
</script>

<style scoped>
</style>
