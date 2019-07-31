import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import(/* webpackChunkName: 'home' */'@/pages/Home.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component:  () => import(/* webpackChunkName: 'todos' */'@/pages/Todos.vue')
    }
  ]
})
