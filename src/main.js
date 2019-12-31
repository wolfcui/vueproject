// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from './router/router'
import axios from 'axios'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.prototype.$ajax = axios
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:Router,
})
