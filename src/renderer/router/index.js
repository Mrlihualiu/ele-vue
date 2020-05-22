import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: require('@/pages/home/home').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/pages/about/about').default
    }
  ]
})
