import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/Search.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
})

export default router
