<template>
  <div class="amap-page-container">
    <div class="toolbar">
      <span v-if="loaded">
        {{result}}<br />
        <br />
        {{result.addressComponent.city}}
        <br />
        <br />
        {{pinyin}}
        <iframe
          id="fancybox-frame"
          height="26"
          name="fancybox-frame1540861743901"
          frameborder="0"
          scrolling="no"
          hspace="0"
          :src="url"
        ></iframe>
      </span>
      <span v-else>正在定位</span>
    </div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
import chinesePointCode from "./vue-py.js";
var map;
export default {
  data() {
    return {
      loaded: false,
      result: {},
      city: "",
      pinyin: "",
      url: ""
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 6000
      });
      geolocation.getCurrentPosition((status, result) => {
        this.loaded = true;
        this.result = result;
        console.log(result);
        if (result.addressComponent) {
          this.city = result.addressComponent.city;
          if (result.addressComponent.city.indexOf("市") != -1) {
            var length = result.addressComponent.city.length;
            this.city = this.city.slice(0, length - 1);
          }
          this.url =
            "http://i.tianqi.com/index.php?c=code&py=" +
            this.transferPinyin(this.city, "") +
            "&a=getcode&id=34&h=25&w=280";
          console.log(this.url);
        }
      });
    });
  },
  methods: {
    transferPinyin(chinese, modifiers) {
      var chars = chinese.split("");
      var length = chars.length;
      if (length) {
        for (var i = 0; i < length; i++) {
          var char = chars[i];
          chars[i] = this.handle(char, modifiers);
        }
        chinese = chars.join("");
      }
      return chinese;
    },
    handle(char, modifiers) {
      var charPoint = char.charCodeAt(0);
      for (var p in chinesePointCode) {
        if (chinesePointCode[p].indexOf(charPoint) > -1) {
          char = p + "";
          // handle modifiers
          // 处理 modifiers
          if (modifiers === "capitalize") {
            char = char.toUpperCase();
          } else if (modifiers === "upperfirst") {
            char = char.charAt(0).toUpperCase() + char.slice(1);
          }
        }
      }
      return char;
    }
  }
};
</script>
<style lang="scss">
.amap-page-container,
.amap-demo {
  width: 300px;
  height: 300px;
}
</style>