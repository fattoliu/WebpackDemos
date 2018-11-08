import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import Child from '../components/Child'
import Sidebar from '../components/Sidebar'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/home',
      name: 'home',
      components: {
        main: Home
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/user/:name',
      name: 'user',
      component: User,
      children: [{
        path: 'more',
        component: Child
      }]
    },
    {
      path: '/role',
      components: {
        sidebar: Sidebar
      }
    }
  ]
})

export default router
