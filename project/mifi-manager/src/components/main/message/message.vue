<template>
  <div class="message">
      <div class='left'>
          <el-menu default-active='/message/smsInbox' :router='true'>
            <el-menu-item index='/message/smsInbox'>收件箱<el-badge :value='inboxNum'></el-badge></el-menu-item>
            <el-menu-item index='/message/smsSent'>发件箱<el-badge :value='sendNum' :max='99'></el-badge></el-menu-item>
            <el-menu-item index='/message/smsDrafts'>草稿箱<el-badge :value='draftNum'></el-badge></el-menu-item>
          </el-menu>
      </div>
      <div class='right'>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: 'message',
      inboxNum:12,
      sendNum:200,
      draftNum:10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message{display:flex;}
.message .left{flex:0 0 150px;background:#eee;min-height:400px;}
.message .right{padding:20px;}
.message  .el-menu-item {border-bottom:1px solid #ddd;text-align:left;line-height: 35px;height:35px;}

.el-badge{padding-left:80px;}

</style>
