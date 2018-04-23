import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import LinksPage from '@/pages/LinksPage'
import ProfilePage from '@/pages/ProfilePage'

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
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfilePage
    }
  ]
})
