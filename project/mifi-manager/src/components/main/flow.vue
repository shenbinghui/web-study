<template>
  <div>
    <div class="flow f16">
      <h3 class='f16'>流量统计</h3>
      <div class='net_box'>
          <p class='title'>移动网络</p>
          <div class='opera'>
              <span class='f16'>月度流量</span>
              <el-button @click='editBtn' type='info'>编辑</el-button>
          </div>
          <div class='usage'>
            <p>持续时间：<span>00:00:00</span></p>
            <p><el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress></p>
            <p><span>已用：<strong>0B</strong></span><span>总计：<strong>1MB</strong></span></p>
          </div>
          <div class='result'>
              <span class='f16'>总流量</span>
              <p>持续时间：<strong>18:33:00</strong></p>
              <p>已用：<strong>500MB</strong></p>
          </div>
      </div>
      <p class='msg'>流量统计结果仅供参考，实际流量以您的收费帐单的额度为准。</p>
      <div class='clear'>
        <div><el-button type='info' @click='clearDataBtn'>清除历史记录</el-button>
        <el-dialog title="确认" v-model="dialogVisible" size="tiny" class='dlg'>
            <span>确认要清空数据吗？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="clearDataOk">确 定</el-button>
            </span>
          </el-dialog>
        </div>
        <div><label>上次清空时间：</label><span>2015,12,23</span></div>
      </div>
    </div>
    <div class='wlan'>
      <h3 class='f16'>已连接WLAN客户端</h3>
      <el-table :data='tableData' class='wlan_tb'>
        <el-table-column label='ID' prop='wlanID'></el-table-column>
        <el-table-column label='IP地址' prop='wlanIP'></el-table-column>
        <el-table-column label='主机名' prop='wlanHost'></el-table-column>
        <el-table-column label='MAC地址' prop='wlanMac'></el-table-column>
        <el-table-column label='持续时间' prop='wlanTime'></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       dialogVisible:false,
       tableData: [{
        wlanID: '1',
        wlanIP: '192.168.0.1',
        wlanHost: 'iPhone6s',
        wlanMac:'20:44:00:e3:88:98',
        wlanTime:'00:30:09'
      }, {
        wlanID: '2',
        wlanIP: '192.168.0.2',
        wlanHost: 'HuaWei',
        wlanMac:'20:33:00:99:88:98',
        wlanTime:'02:12:33'
      }, {
        wlanID: '3',
        wlanIP: '192.168.0.3',
        wlanHost: 'ZTE',
        wlanMac:'81:33:00:e3:88:00',
        wlanTime:'01:12:35'
      }, {
        wlanID: '4',
        wlanIP: '192.168.0.4',
        wlanHost: 'OppoR7',
        wlanMac:'60:33:00:e3:88:98',
        wlanTime:'00:42:33'
      }]
    }
  },
  created(){

  },
  destroyed(){

  },
  methods:{
    clearDataBtn(){
        this.dialogVisible = true;
    },
    clearDataOk(){
        this.dialogVisible = false;
        console.log('数据清零操作');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*@import '/static/css/flow.css'*/
*{font-size:12px;}
.f16{font-size:16px;}
.flow{min-height: 400px;}
.flow h3,.wlan h3{font-weight: bold;color:#20a0ff;border-bottom:1px solid #bbb;padding:10px 0px 5px 0;margin:0px 30px;}
.flow .net_box{width:800px;height:300px;border:1px solid #ccc;margin:10px auto;}
.flow .msg{font-size:12px;border-bottom:1px solid #bbb;margin:0px 80px;padding:10px 0px;}
.flow .net_box .opera,.flow .net_box .result{margin:10px 30px}
.flow .net_box .opera  .el-button{float:right;}
.flow .net_box .usage{margin:10px auto;padding:10px 50px;}
.flow .net_box .usage p{margin-top:10px;}
.flow .net_box .usage p:last-child span:first-child{margin-right:350px;}
.flow .net_box .result{border-top:1px solid #eee;padding:5px;}
.flow .net_box .result p{margin:10px 0 0 100px}
.flow .clear{text-align:right;font-size:12px;margin-right:100px;}
.flow .clear .el-button{margin:10px 0px;margin-right:30px;}
.flow .dlg{text-align:left; /*background:#324157;*/}
.flow .title{background:#324157;height:30px; line-height: 30px;color:#fff;font-size:16px;}
.wlan .wlan_tb{width:90%;margin:20px auto;}
</style>
