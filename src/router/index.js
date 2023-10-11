import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/service',
      name: 'Service',
      component: () => import('../pages/ServicePage.vue')
    },
    {
      path: '/page-1',
      name: 'page-1',
      component: () => import('../pages/Page1.vue')
    },
    {
      path: '/page-2',
      name: 'page-2',
      component: () => import('../pages/Page2.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../pages/Contact.vue')
    },
  ]
})

export default router
