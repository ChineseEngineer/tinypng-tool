import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tinypng',
      component: require('@/components/TinyPng').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
