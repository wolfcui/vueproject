import Vue from 'vue'
import VueRouter from 'vue-router';

import Register from '../components/Register';


const routes = [

  { path: '/register',name:'register', component: Register }

]

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes: routes });

export default router;
