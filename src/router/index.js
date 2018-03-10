import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/index',
      component: home
    }
  ]
})
