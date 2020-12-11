import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      thisStep: 1,
      lastStep: null,
    }
  },
  mutations: {
    lastStepMut(state, param) {
      state.lastStep = param;
    },
    thisStepMut(state, param) {
      state.thisStep = param;
    },
  }
})
