import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:title/:id',
    component: () => import(/* webpackChunkName: "/:id" */ '../views/DagreeView.vue')
  },
  {
    path: '/:title/:id/:lektitle/:dagreeId',
    component: () => import(/* webpackChunkName: "/:id/:dagreeId" */ '../views/CreateTest.vue')
  },
  {
    path: '/tester/:title/:id',
    name: '/tester/:title/:id',
    component: () => import(/* webpackChunkName: "/tester/:title/:id" */ '../views/TestView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
