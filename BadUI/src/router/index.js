import { createRouter, createWebHistory } from 'vue-router'
import QuestionsAnswers from '../views/QuestionsAnswers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomePage.vue")
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsAnswers
    }
  ]
})

export default router
