<template>
    <div id="app">
        <div class="my-button" @click="changeData">
            {{val}}
        </div>
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
        <custom-directive />
        <mixins />
        <slot-demo />
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
import CustomDirective from './components/自定义指令'
import Mixins from './components/mixins'
import SlotDemo from './components/slot'

export default {
  name: 'App',
  data() {
    return {
        val:'我是demo',
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
    Like,
    CustomDirective,
    Mixins,
    SlotDemo
  },
  methods: {
    showBalance: function(obj) {
      this.show_balance = obj.c
      this.balance = obj.a + obj.b
    },
    changeData() {
        this.val = "我已经改变了";
    }
  }
}
</script>

<style scoped>
.my-button {
    width: 100%;
    height: 50px;
    background: red;
}
</style>
