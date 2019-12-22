import Vue from 'vue'
import VueRouter from 'vue-router';

import First from '../components/First';
import HelloWorld from "../components/HelloWorld";


const routes = [

  { path: '/', component: HelloWorld },
  { path: '/first', component: First }

]

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;
