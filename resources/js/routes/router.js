import {createRouter, createWebHistory} from 'vue-router';
import Checkout from "../components/Checkout.vue";
import CheckoutStep1 from "../components/CheckoutStep1.vue";
import CheckoutStep2 from "../components/CheckoutStep2.vue";

const routes = [
  {
    path: '/',
    component: Checkout,
    name: 'checkout'
  },
  {
    name: 'CheckoutStep1',
    path: '/checkout/step1',
    component: CheckoutStep1,
  },
  {
    name: 'CheckoutStep2',
    path: '/checkout/step2',
    component: CheckoutStep2,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
