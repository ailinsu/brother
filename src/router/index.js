import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Clue from '../components/Clue.vue';

import clues from '../../clues.json';

Vue.use(VueRouter)

const routes = clues.map((clue) => {
  return {
    path: `/${clue.key}`,
    name: `${clue.phase}${clue.number}`,
    component: Clue,
    props: {
      phase: clue.phase,
      number: clue.number,
      text: clue.text,
    },
  }
});

routes.push({
  path: '/',
  name: 'Home',
  component: Home,
});

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;
