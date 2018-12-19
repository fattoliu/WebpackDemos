// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Navi from './Navi'
import router from './router/website'
import VueAMap from 'vue-amap';
// import BaiduMap from 'vue-baidu-map'
Vue.use(VueAMap);
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'UXxU9eWgnKcT04NwS0gow1GU5wGKzfc7'
// })
Vue.config.productionTip = false

// 初始化vue-amap  
VueAMap.initAMapApiLoader({
  // 申请的高德key  
  key: '4aeb5607c2c8f9fc3763d2d02903c4ea',
  // 插件集合  
  plugin: ['AMap.Geolocation']
})

/* eslint-disable no-new */
new Vue({
  router: router,
  el: '#navi',
  components: {
    App,
    Navi
  },
  template: '<Navi/>'
})
