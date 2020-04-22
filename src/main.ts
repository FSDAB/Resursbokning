import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Dropdown from 'vue-simple-search-dropdown';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faPlus, faPen, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser, faPlus, faPen, faLink);
Vue.component('font-awesome-icon', FontAwesomeIcon);

import './styles/site.scss';

import axios from 'axios';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

Vue.use(Dropdown);

Vue.component('Dropdown', Dropdown);

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
