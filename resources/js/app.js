require('./bootstrap');
import { createApp } from 'vue';
import { router } from './routes/router';
import { store } from './store/index';

import App from './components/App.vue'
createApp(App)
  .use(router)
  .use(store)
  .mount("#app")
