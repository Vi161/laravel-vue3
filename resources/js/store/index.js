import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      orderAddRouter: {name: ''},
      staticIP: {active: false, price: ''},
      orderAddPlan: [],
      lastStep: null,
      order_id: null,
    }
  },
  mutations: {
    orderAddRouterMut(state, param) {
      state.orderAddRouter = param;
    },
    staticIPMut(state, param) {
      state.staticIP = param;
    },
    orderAddPlanMut(state, param) {
      state.orderAddPlan = param;
    },
    lastStepMut(state, param) {
      state.lastStep = param;
    },
    orderIdMut(state, param) {
      state.order_id = param;
    },
  }
})
