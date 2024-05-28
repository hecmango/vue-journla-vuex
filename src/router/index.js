import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue";

import DayBookLayout from "../modules/daybook/layouts/DayBookLayout.vue";
import daybookRouter from "../modules/daybook/router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/daybook',
    // name: 'daybook',
    component: DayBookLayout,
    ...daybookRouter
  },
]

const router = new VueRouter({
  routes
})

export default router
