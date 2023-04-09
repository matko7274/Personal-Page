import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Content from '../views/Content.vue'
import MyEducation from '@/views/MyEducation.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/education',
      name: 'MyEducation',
      component: MyEducation
    }
  ]
})
