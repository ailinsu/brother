import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Noodle from '../components/Noodle.vue';
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
  path: '/start',
  name: 'Home',
  component: Home,
},
{
  path: '/',
  name: 'Noodle',
  component: Noodle,
}
);

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;
