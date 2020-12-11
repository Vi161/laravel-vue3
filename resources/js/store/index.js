import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      thisStep: 1,
      checkoutSteps: [],
    }
  },
  mutations: {
    thisStepMut(state, param) {
      state.thisStep = param;
    },
    checkoutStepsMut(state, param) {
      state.checkoutSteps = param;
    },
  }
})
