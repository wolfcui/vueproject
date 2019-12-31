<template>
  <div id="app">
    <headerView v-if="header_show"></headerView>
    <div>
      <router-link :to="{name:'register'}">登录</router-link>
      <router-view></router-view>
    </div>
    <div style="display:inline;"><button @click="play1" class="play-btn">播放</button></div>
     <div style="display:inline;"><video controls ref="videoDemo" class="video-box" autoplay style="width:500px;height: 500px;">
       <source src type="video/mp4" />
     </video></div>
    </div>
</template>

<script>
import header from './components/Header'
import video from './video/1.mp4'
import 'video.js/dist/video-js.css'
export default {
  name: 'App',

  data(){
    return{

    }
  },
  methods:{
    play1(){
      this.$refs.videoDemo.src = video;
    }
  },
  components:{
  'headerView':header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
