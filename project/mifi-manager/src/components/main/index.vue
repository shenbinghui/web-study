<template>
<div id='index'>
    <div class='opera'>
      <span class='server'>{{plmnName}}</span>
      <span class='signal'><img src="../../../static/img/icon_signal_01.png" alt="signal"></span>
      <span class='netSwitch'>
        <el-switch
          v-model="netWorkSwitch"
          on-color="#13ce66"
          off-color="#ff4949"
          @change='onOffSwitch'>
        </el-switch>
      </span>
      <span class='setting'>
        <div>未连接</div>
        <div><a href="#/settings/dialConnect">连接设置</a></div>
      </span>
    </div>
    <div class='bg-bottom'></div>
    <div class='info'>
          <div class='status'>
              <div class='content'>
                <h4>当前连接</h4>
                <p><span>接收/发送：</span><span><u>0/B</u><u>0/B</u></span></p>
                <p><span>持续时间：</span><span>00:00:00</span></p>
              </div>
              <div class='content'>
                <h4>wlan状态：</h4>
                <p><span>wlan状态：</span><span>{{wlanStatus}}</span></p>
                <p><span>当前的WLAN用户：</span><span>0</span></p>
              </div>
          </div>
          <div class='apn'>
            <p>APN</p>
            <el-row :span='24'>
               <el-col :span='5'><span>APN：</span><span>{{anpInfo.apnname}}</span></el-col>
               <el-col :span='5'><span>用户名：</span><span>{{anpInfo.username}}</span></el-col>
               <el-col :span='5'><span>密码：</span><span>{{anpInfo.password}}</span></el-col>
               <el-col :span='5'><span>拨号号码：</span><span>{{anpInfo.dialupnum}}</span></el-col>
               <el-col :span='4'><span>网络模式：</span><span>{{anpInfo.netmode}}</span></el-col>
            </el-row>
          </div>
    </div>
    <v-footer class='footer'></v-footer>
</div>
</template>

<script>
import Footer from './footer';
export default {
  name: 'index',
  data () {
    return {
        login:true,
        plmnName:'中国移动',
        netWorkSwitch: true,
        wlanStatus:'开启',
        anpInfo:{apnname:'',username:'',password:'',dialupnum:'',netmode:''}
    }
  },
  created:function(){
   //console.log('aaa');
      //this.$store.commit("getTest");
      //this.$store.state.test = 'aaaaa';
      //this.$store.commit("getTest");
     var api = '/static/data/dialup_profiles.json';
     this.axios.get(api).then(res =>{
      var data = res.data.response;
      var currentApnIndex = data.CurrentProfile;
      var currentApnInfo = data.Profiles.Profile[currentApnIndex-1];
      this.anpInfo.apnname = currentApnInfo.ApnName;
      this.anpInfo.username = currentApnInfo.Username;
      this.anpInfo.password = currentApnInfo.Password;
      this.anpInfo.dialupnum = currentApnInfo.DialupNum;
      this.anpInfo.netmode = currentApnInfo.NetMode;
     });
  },
  components:{
      'v-footer':Footer
  },
  methods:{
    onOffSwitch(){
      if(this.netWorkSwitch){
        this.plmnName='中国移动';
        this.wlanStatus='开启';
      }else{
        this.plmnName='无服务';
        this.wlanStatus='关闭'
      }
            
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#index .opera{position: relative;background: url(../../../static/img/main_bg.jpg) no-repeat;height:200px;width:960px;}
#index .server{position:absolute;top:40%;left:30%;font-size:40px;}
#index .signal{position:absolute;top:32%;left:53%;}
#index .netSwitch{position:absolute;top:48%;left:63%;}
#index .setting{position:absolute;top:40%;left:73%;}
#index .bg-bottom{clear:both;width:100%;height:30px;background: url(../../../static/img/login_bg.png); }
.info{}
.info .status{display:flex;height:210px;margin-top:30px;}
.info .status .content{flex:1;border:1px solid #999;:10px;border-radius:10px; position:relative;margin:10px;}
.info .status  h4{background: lightblue;display: inline-block;width:150px;height:30px;line-height: 30px;border-radius: 30px;color:#fff;position: absolute;left:20px;top:-17px;text-align: center}

.info .status .content p{line-height: 10px;padding-left:30px;padding-top:30px;}
.info .status .content p span{margin-right:100px;}

.apn span{padding:0 3px;font-size:14px;}
.footer{margin:30px 0;}
</style>
