import {createRouter, createWebHistory} from 'vue-router';
const Main = () => import(/* webpackChunkName: 'Main' */ '../components/Main.vue');
const Steps = () => import(/* webpackChunkName: 'Steps' */ '../components/Steps.vue');
const routes = [
  {
    path: '/',
    component: Main,
    name: 'Main'
  },
  {
    name: 'Steps',
    path: '/step:id',
    component: Steps,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
