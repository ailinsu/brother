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
    path: '/test',
    name: 'Test',
    component: Clue,
    props: {
      text: "fdsa"
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
