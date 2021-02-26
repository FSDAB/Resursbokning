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
    {
      path: '/month',
      name: 'month',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/Month.vue')
    },
    {
      path: '/count1',
      name: 'count1',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count2',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count3',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count4',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count5',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count6',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count7',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count8',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count9',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count10',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count11',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count12',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count13',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count14',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count15',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count16',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count17',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
    {
      path: '/count1',
      name: 'count18',
      // component: month
      component: () => import(/* webpackChunkName: "about" */ './views/CountDatorer/Count1.vue')
    },
  ]
});
