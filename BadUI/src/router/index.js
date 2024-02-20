import { createRouter, createWebHistory } from 'vue-router'
import QuestionsAnswers from '../views/QuestionsAnswers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/start',
      name: 'home',
      component: () => import("../views/HomePage.vue")
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsAnswers
    },
    {
      path: '/',
      name: 'start',
      component: () => import('../views/WelcomePage.vue')
    },
    {
      path: '/ending',
      name: 'ending',
      component: () => import('../views/NuclearEnding.vue')
    },
    {
      path: '/normal_ending',
      name: 'normal_ending',
      component: () => import('../views/FinalEnding.vue')
    }
  ]
})

export default router
