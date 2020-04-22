import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

import Toasted from 'vue-toasted';
Vue.use(Toasted);

Vue.toasted.register(
  'error',
  payload => {
    if (!payload.message) {
      return 'Error message missing...';
    }

    return payload.message;
  },
  { type: 'error', duration: 5000 }
);

Vue.toasted.register(
  'success',
  payload => {
    if (!payload.message) {
      return 'Success message missing...';
    }

    return payload.message;
  },
  { type: 'success', duration: 5000 }
);

Vue.toasted.register(
  'info',
  payload => {
    if (!payload.message) {
      return 'Info message missing...';
    }

    return payload.message;
  },
  { type: 'info', duration: 10000 }
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
