import Vue from 'vue';

import { createStore } from 'vuex'
// import Vuex from 'vuex';
import camelCase from 'lodash/camelCase';

/*----------   Global   ----------*/
import actions from './globals/actions';
import getters from './globals/getters';
import state from './globals/state';
import mutations from './globals/mutations';
/*----------   Modules   ----------*/
import plugins from './plugins';
// Vue.use(Vuex);

// const requireModules = require.context("./modules", false, /\.js$/);
// const modules = {};
//
// requireModules.keys().forEach(fileName => {
//   const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
//
//   modules[moduleName] = requireModules(fileName).default;
// });

export const store = createStore({
  actions,
  getters,
  mutations,
  state,
  plugins,
})
