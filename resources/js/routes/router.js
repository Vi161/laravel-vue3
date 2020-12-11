import {createRouter, createWebHistory} from 'vue-router';
import Checkout from "../components/Checkout.vue";
import CheckoutStep from "../components/CheckoutStep.vue";

const routes = [
  {
    path: '/',
    component: Checkout,
    name: 'checkout'
  },
  {
    name: 'CheckoutStep',
    path: '/checkout/step:id',
    component: CheckoutStep,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
