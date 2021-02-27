import {createRouter, createWebHistory} from 'vue-router';
import Main from "../components/Main.vue";
import Steps from "../components/Steps.vue";

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
