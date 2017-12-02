<template>
  <div id="app">
    <!-- login 模态框 -->
    <v-login  :isLogin='login' ></v-login>
  
    <!-- 头部 -->
    <v-header></v-header>
    <!-- 导航 -->
    <v-nav></v-nav>
    <router-view class='content'></router-view>
  </div>
</template>

<script>
import Header from './components/main/Header';
import Nav from './components/main/Nav';
import Login from './components/login';
export default {
  name: 'app',
  data:function(){
    return {
        headerFixed:false,
        login:false
    }
  },
  created:function(){
    this.$router.push('/index');
  },
  watch:{
    '$route':function(to,from){
    }
  },
  components:{
      'v-nav':Nav,
      'v-header':Header,
      'v-login':Login
  }
  
}
</script>

<style>
*{margin:0;padding:0;}
a , u{text-decoration: none}
body{margin: 0;padding:0;background: url(/static/img/body_bg.gif) repeat-x;}
#app {width: 960px;margin: 0 auto;font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;}
.content{background: #fff}
</style>
