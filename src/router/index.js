import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
// import Home from '../components/Home.vue'
import Clue from '../components/Clue.vue';
import Home from '../components/Home.vue';
import clues from '../../clues.json';

Vue.use(VueRouter)

// const Clue = {
//   template: '<Clue/>'
// }

// const Test = {
//   template: '<div>fdsa</div>'
// }

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
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

console.log(clues);

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
