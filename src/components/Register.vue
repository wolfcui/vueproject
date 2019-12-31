<template>
    <div>
      <input type="text" v-model="userParam.name" placeholder="用户名"/>
      <input type="text" v-model="userParam.password" placeholder="密码"/>
      <button @click="login">登录</button>
    </div>
</template>


<script>
    export default {
      name: "Register",
      data() {
        return {
          userParam: {
            name: '',
            password: ''
          }
        };
      },
      methods: {
        login() {
          let _this = this;
          if (this.userParam.name === '' || this.userParam.password === '') {
            alert('账号和密码不能为空');
          } else {
            this.$ajax({
              method: 'post',
              url: 'http://localhost:8099/user/register',
              data: _this.userParam
            }).then(res =>{
              alert('登陆成功');
            })
          }
        }
      }
    }
</script>

<style scoped>

</style>
