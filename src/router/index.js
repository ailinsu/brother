import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../components/Home.vue'
import Clue from '../components/Clue.vue'

Vue.use(VueRouter)

// const Clue = {
//   template: '<Clue/>'
// }

// const Test = {
//   template: '<div>fdsa</div>'
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Clue,
    props: {
      text: "fdsa"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
