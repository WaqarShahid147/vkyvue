import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import LinksPage from '@/pages/LinksPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/links',
      name: 'links',
      component: LinksPage
    }
  ]
})
