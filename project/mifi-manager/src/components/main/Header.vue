<template>
    <div class='vHeader'>
      <el-row :span='24' >
          <el-col :span='18'><img src="static/img/logo.png" alt="logo"></el-col>
          <el-col :span='6'>
              <div class='opera'> 
                <span>
                  <el-select v-model="language" placeholder="请选择" size='mini'>
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </span> 
                <span class='help'><a href='javascript:void(0);'>帮助</a></span>|
                <span class='login' v-if='islogin'><a @click='logout'>登出</a></span>
                <span class='login' v-else><a href='#/index' >登录</a></span>

              </div>
              <div class='status'>
                <ul>
                  <li><img title='短信息' src="static/img/unread_message.gif" alt=""></li>
                  <li><img title='手机信号' :src='curSignal | signal ' alt=""></li>     
                  <li><img title='wlan状态' :src="wlanStatus | wlan" alt=""></li>
                  <li v-for='(item,index) in wifi.wifiStatus' v-show='index == wifi.curWifi'><img title='wifi信号' :src='wifi.wifiStatus[index]' alt=""></li>
                  <li ><img title='电池电量' src="static/img/battery_elect.gif" alt=""></li>
                </ul>
              </div>
          </el-col>
      </el-row>
    </div>
</template>

<script>
export default{
  data:function(){
    return{
        options:[
        {label:'中文',value:'zh'},
        {label:'英语',value:'en'}
        ],
        language:'',
        islogin:true,
        wifi:{
          curWifi:2,
          wifiStatus:[
          'static/img/station_0.png',
          'static/img/station_1.png',
          'static/img/station_2.png',
          'static/img/station_3.png',
          'static/img/station_4.png']
        },
        curSignal:0,
        wlanStatus:true,
        timer:''
    }
  },
  methods:{
     logout:function(){
      sessionStorage.removeItem('islogin');
      this.islogin=false;
     }
  },
  filters:{
      signal: function (i) {
          return 'static/img/signal_'+i+'.png'
      },
      wlan(i){
          return i?'static/img/wan_901.png':'static/img/wan_902.png';
      }
  },
  created(){
    var self = this;

    this.timer = setInterval(function(){
        self.wifi.curWifi = parseInt(Math.abs((Math.random(1)-0.5)*10)); //0~4
        self.curSignal= parseInt(Math.abs((Math.random(1)-0.5)*10));
        self.wlanStatus = (parseInt(Math.abs(Math.random(1))*10))%2; 
    },3000);
  },
  destroyed:function(){
    //clearInterval(this.timer);
  },
  watch:{
    '$router':function(to,from){
         
    }
  }
}
</script>
    
<style>
.vHeader{position:relative;border-top:2px solid blue;}
.vHeader .el-row{height:75px;background: #fff;}
.vHeader .el-row img{margin-top:15px;}
.vHeader .el-row .opera{position: absolute;right:20px;top:10px;z-index:2;}
.vHeader .el-row .el-select{width:100px;}
.vHeader .el-row span{font-size:12px;margin:0 3px;}
.vHeader .el-row .status{position: absolute;top:25px;right:10px;}
.vHeader .el-row .status ul li{float:left;list-style: none;margin:0 6px;}


</style>
