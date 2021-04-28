import { createRouter, createWebHistory } from 'vue-router'

import aboutUs from '../components/aboutus.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
const routes = [
  {
    path: '/about',
    name: 'About',
    component: aboutUs
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'Home',
    component: login
  },
  {
    path: '/login',
    name: "Log in ",
    component: login,
  },
  {
    path: '/register',
    name: 'sign up',
    component: register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
