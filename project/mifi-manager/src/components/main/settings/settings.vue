<template>
  <div class="settings">
    <main>
          <!-- 左侧导航 -->
        <div class="main-left">
          <el-menu default-active="/settings/advance" class="el-menu-vertical-demo" :router="true" >
            <el-menu-item index="/settings/fastSetting" ><i class="el-icon-setting"></i>快速设置</el-menu-item>
            <el-submenu idnex='dial'>
                  <template slot='title'><i class="el-icon-upload"></i>拨号</template>
                  <el-menu-item index="/settings/dialConnect" >连接</el-menu-item>
                  <el-menu-item index="/settings/dialProfileManager" >Profile管理</el-menu-item>
                  <el-menu-item index="/settings/dialRouterSetting" >网路设置</el-menu-item>
            </el-submenu>
            <el-submenu index="wlan">
              <template slot='title'><i class="el-icon-share"></i>WLAN</template>
              <el-menu-item index="/settings/wlanBaseSettings" >WLAN基本设置</el-menu-item>
              <el-menu-item index="/settings/wlanAdvanceSettings" >WLAN高级设置</el-menu-item>
              <el-menu-item index="/settings/wlanMacFilter" >WLAN MAC地址过滤</el-menu-item>
              <el-menu-item index="/settings/wlanDhcp" >DHCP</el-menu-item>
              <el-menu-item index="/settings/wlanDnsServer" >手动设置DNS服务器</el-menu-item>
              <el-menu-item index="/settings/wlanDhcpStaticIp" >DHCP静态IP</el-menu-item>  
            </el-submenu>
            <el-submenu index='safe'>
              <template slot='title'><i class="el-icon-star-on"></i>安全</template>
              <el-menu-item index="/settings/safePinManger" >PIN码管理</el-menu-item>
              <el-menu-item index="/settings/safeLanIpFilter" >LAN IP地址过滤</el-menu-item>
              <el-menu-item index="/settings/safeViturlServer" >虚拟服务器</el-menu-item>
            </el-submenu>
            <el-submenu index='sys'>
              <template slot='title'><i class="el-icon-view"></i>系统</template>
              <el-menu-item index="/settings/sysDeviceInfo" >设备信息</el-menu-item>
              <el-menu-item index="/settings/sysModifyPwd" >修改密码</el-menu-item>
              <el-menu-item index="/settings/sysRestore" >恢复出厂设置</el-menu-item>
              <el-menu-item index="/settings/sysReboot" >重启</el-menu-item>
            </el-submenu>
            
          </el-menu>
        </div>
          <!-- 右侧主内容区 -->
          <div  class="main-right" >
              <router-view class="view"></router-view>
          </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      msg: 'settings',
      shenbh:'settings'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 400px;  border: solid 1px #E9ECF1;  background-color: #FCFCFC; }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
/*.main-left{border:1px red solidd}*/
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 10px 30px; }

.main-left  .el-menu-item {border-bottom:1px solid #ddd;text-align:left;line-height: 35px;height:35px;}
/*.main-left  .el-menu-item:first-child{line-height: 60px;height:60px;}*/
.main-left  .el-submenu{text-align: left;border-bottom:1px solid #ddd;}
.main-left  .el-submenu .el-menu-item {float:left;font-size:12px;}



</style>
