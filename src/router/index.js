import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Points from '../views/Points.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Map from '../views/Map.vue'
import Store from '../views/Store.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/points',
    name: 'points',
    component: Points
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  },
  {
    path: '/:id',
    name: 'store',
    component: Store
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
