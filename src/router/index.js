import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/workers',
    name: 'workers',
    component: () => import('../views/WorkersView.vue'),
  },
  {
    path: '/workers-config:id?',
    name: 'workersConfig',
    component: () => import('../views/WorkerEditor.vue'),
  },
  {
    path: '/candidates',
    name: 'candidates',
    component: () => import('../views/CandidatesView.vue'),
  },
  {
    path: '/candidate-config:id?',
    name: 'candidateConfig',
    component: () => import('../views/CandidateEditor.vue'),
  },
  {
    path: '/interviews',
    name: 'interviews',
    component: () => import('../views/InterviewsView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
