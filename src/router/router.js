import Vue from 'vue'
import Router from 'vue-router';
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import Shop from '@/views/shop'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes:[
    {
      path:'/',
      name:Shop,
      component: Shop
    }
  ]
})
