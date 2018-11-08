// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Navi from './Navi'
import router from './router/website'

Vue.config.productionTip = false

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
