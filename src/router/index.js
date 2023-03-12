import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
    path: '/points',
    name: 'points',
    component: Points
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
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
