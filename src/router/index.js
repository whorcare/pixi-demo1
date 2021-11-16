import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import(/* webpackChunkName: "page1" */ '../views/page1'),
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import(/* webpackChunkName: "page2" */ '../views/page2'),
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import(/* webpackChunkName: "page3" */ '../views/page3'),
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import(/* webpackChunkName: "page4" */ '../views/page4'),
  },
  {
    path: '/page5',
    name: 'page5',
    component: () => import(/* webpackChunkName: "page5" */ '../views/page5'),
  },
  {
    path: '/page6',
    name: 'page6',
    component: () => import(/* webpackChunkName: "page6" */ '../views/page6'),
  },
  {
    path: '/pagea4',
    name: 'pagea4',
    component: () => import(/* webpackChunkName: "pagea4" */ '../views/pagea4'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
