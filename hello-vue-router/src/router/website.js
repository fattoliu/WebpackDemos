import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home'
import Login from '../pages/login'
import Post from '../pages/post'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/post',
      meta: {
        login_required: true
      },
      component: Post,
      children: [{
        path: '/post/rain',
        component: {
          template: `<h2>雨天后座</h2>`
        }
      }]
    },
    {
      path: '/a',
      meta: {
        login_required: true
      },
      component: {
        template: `<h1>A</h1>`
      }
    }
  ]
})

router.beforeEach(function (to, from, next) {
  var logged_in = true;
  var hasPost = to.matched.some(function (item) {
    // return item.path == '/post';
    return item.meta.login_required;
  });
  if (!logged_in && hasPost) {
    next('/login');
  } else {
    next();
  }
})

router.afterEach(function (to, from) {
  console.log('to:', to);
  console.log('from:', from);

})

export default router
