import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hub',
      name: 'hub',
      // component: Hub
      component: () => import(/* webpackChunkName: "about" */ './views/Hubben.vue')
    },
    {
      path: '/bokning',
      name: 'bookings',
      // meta: {Layout: ""},
      // component: Bookings
      component: () => import(/* webpackChunkName: "about" */ './views/Bokning.vue')
    },
    {
      path: '/dagsoversikt',
      name: 'dags',
      // component: Dags
      component: () => import(/* webpackChunkName: "about" */ './views/Dagsvisning.vue')
    },
    {
      path: '/mesher',
      name: 'mesher',
      // component: Mesher
      component: () => import(/* webpackChunkName: "about" */ './views/Mesh.vue')
    },
  ]
});
