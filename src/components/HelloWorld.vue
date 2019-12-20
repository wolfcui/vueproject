<template>
  <div>
    <div class="content">
      <ul>
        <li>我的文章</li>
        <li>
          <button @click='send'>发送Ajax请求</button>
        </li>

        <li v-for="u in user">{{u.name}}</li>
        <li>我的个人中心</li>
      </ul>
    </div>
    <div class="foot"></div>
  </div>

</template>
<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import common from '../common/common.js'
  Vue.use(VueResource)
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {}
    };
  },
  methods:{
    send:function () {
      let url = common.url+'/api/web/getUser';
      this.$http.get(url).then((response)=>{
        console.log(response);
        this.user=response.data;
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
