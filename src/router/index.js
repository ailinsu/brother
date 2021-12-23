import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Noodle from '../components/Noodle.vue';
import Clue from '../components/Clue.vue';
import LeetCode from '../components/LeetCode.vue';

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
},
{
  path: '/noodle',
  name: 'Noodle',
  component: Noodle,
},
{
  path: '/code',
  name: 'LeetCode Time',
  component: LeetCode,
}
);

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;
