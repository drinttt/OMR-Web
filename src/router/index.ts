import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '@/views/loginView.vue'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
  ]
})

export default router
