<template>
  <div>
      <div style='float:left;width:50%;margin-bottom:10px'>
            <el-input v-model="imeiNum" placeholder="请输入内容" style='width:30%'></el-input>
            <el-button type="primary" style='width:8%' @click='findImeiClick' size='small'>查询</el-button>
            <el-button type="primary" style='width:8%' @click='addImeiClick'  size='small'>增加</el-button>
            <!-- <el-button type="primary" style='width:10%' @click='importImieClick' >导入</el-button> -->
            <vue-xlsx-table @on-select-file="importImieClick">导入</vue-xlsx-table>
            <el-button type="primary" style='width:12%' @click='deleteSelectedClick' size='small'>删除选中</el-button>
      </div>
      <div>
        <el-table
          ref='imeiTable'
          :data="imeiData"
          border
          style="width: 85%;clear:both"
          @selection-change = 'handleSelectionChange'>
          <el-table-column
              width='50'
              type='selection'
          >
          
          </el-table-column>
          <el-table-column
            prop="_id"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="imei"
            label="IMEI号"
            >
            <template scope='scope'>
                <span v-if='updataEnable'><el-input v-model='scope.row.imei'></el-input></span>
                <span v-if='!updataEnable'>{{scope.row.imei}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="mac"
            label="MAC地址"
            >
            <template scope='scope'>
                <span v-if='updataEnable'><el-input v-model='scope.row.mac'></el-input></span>
                <span v-if='!updataEnable'>{{scope.row.mac}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="meid"
            label="MEID号"
            >
            <template scope='scope'>
                <span v-if='updataEnable'><el-input v-model='scope.row.meid'></el-input></span>
                <span v-if='!updataEnable'>{{scope.row.meid}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            >
            <template scope="scope">
              <el-button @click="updateImeiClick(scope.row)" type="primary" size="small">{{updataBtn}}</el-button>
              <span v-if='!updataEnable'><el-button @click="deleteImeiClick(scope.$index)" type="primary" size="small">删除</el-button> </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 15, 20, 25]"
          :page-size="page.pageCount"
          layout="total, sizes, prev, pager, next, jumper"
          :total="page.totalCount">
        </el-pagination>
      </div>
  </div>
</template>


<script>

export default{
    name:'imei',
    methods: {
      getJsonLength(o){
          var l = 0;
          for(var i in o){
            l++
          }
          return l;
      },
      getType(d){
          //数组类型
          return Object.prototype.toString.call(d).slice(8,-1).toLowerCase();
      },
      getAllImeiData(){
          this.axios.get(this.rootUrl+'imei/showimei/').then((res) =>{
            this.page.totalCount = res.data.length;
          });
      },
      getDataByPage(){
        this.axios.post(this.rootUrl+'imei/pageimei',
            {
              pageCount:this.page.pageCount,
              totalPage:this.page.totalPage
            }
          ).then((rs) =>{
            this.imeiData = rs.data;
        });
      },
      updateImeiClick(row) {
          this.updataEnable = !this.updataEnable;
          this.updataBtn = '确定';
          
          


          //确定更新数据
          if(!this.updataEnable){
            //this.$message(row._id);
            this.axios.get(this.rootUrl+'imei/updateimei/'+row.imei+'/'+row._id);
            this.updataBtn = '更新';
            this.$message('更新成功');
            // this.getAllImeiData();
            this.getDataByPage();
          }else{
            //只显示当前要更新的那条数据
            this.axios.get(this.rootUrl+'imei/findimei/'+row.imei).then((res) =>{
                if(this.getType(res.data) === 'object'){
                      //这个地方是个坑，获取的是一个json时，是object,但我的imeiData是数组，没办法，先把这个object转为字符串并添加[],使它成为一个json格式的数组，然后在JSON化
                      this.imeiData = JSON.parse('['+JSON.stringify(res.data)+']');
                  }else{
                      this.imeiData = res.data;
                  }
            });
          }
      },
      deleteImeiClick:function(index){
        //获取单条imei信息 index是表格的第index+1行，
        let id = this.imeiData[index]._id;
        this.axios.get(this.rootUrl+'imei/deleteimei/'+ id).then(function(){
            this.getAllImeiData();
            this.getDataByPage();
        }.bind(this));
      },
      findImeiClick(){
          if(this.imeiNum){
              this.axios.get(this.rootUrl+'imei/findimei/'+this.imeiNum).then((res) =>{
                if(this.getType(res.data) === 'object'){
                    //这个地方是个坑，获取的是一个json时，是object,但我的imeiData是数组，没办法，先把这个object转为字符串并添加[],使它成为一个json格式的数组，然后在JSON化
                    this.imeiData = JSON.parse('['+JSON.stringify(res.data)+']');
                }else{
                    this.imeiData = res.data;
                }
              });
          }else{
               this.getAllImeiData(); 
               this.getDataByPage();
          }
      },
      addImeiClick(){
          this.axios.get(this.rootUrl+'imei/addimei/'+this.imeiNum).then(function(rs){
              this.getAllImeiData();
              this.getDataByPage();
              this.imeiNum = '';
          }.bind(this));
      },
      importImieClick(d){
          //这里用了xmls插件，注意去学习
          let arr = [];
          for(let i=0;i<d.body.length;i++){
            arr.push({imei:d.body[i].imei});
          }

          //arr写入数据库
          this.axios.post(this.rootUrl+'imei/addmanyimei',arr).then(function(rs){
              this.getAllImeiData();
              this.getDataByPage();
          }.bind(this));
      },
      deleteSelectedClick(rows){
        //清除所有
        //this.$refs.imeiTable.clearSelection();
        let datas = [];
        this.selectImeiData.forEach(function(item){
          datas.push(item._id)
        });
        this.axios.post(this.rootUrl+'imei/deleteimei',datas).then((rs) => {
              this.getAllImeiData();
              this.getDataByPage();
          }).catch((err) =>{
              console.log(err);
          });

      },
      handleSelectionChange(val){
        this.selectImeiData = val;
      },
      handleSizeChange(pageCount) {
        //获取设置pageCount
        this.page.pageCount = pageCount;
        this.page.totalPage =0;
        this.getDataByPage();
      },
      handleCurrentChange(curPage) {
        this.page.totalPage = (curPage-1)*(this.page.pageCount);
        this.getDataByPage();
      }
    },
    data() {
      return {
        imeiData: [],
        selectImeiData:[],
        imeiNum:'',
        updataEnable:false,
        updataBtn:'更新',
        page:{
          currentPage:1,  //当前页
          totalPage:0,  //总共多少页
          pageCount:10,  //每页多少条
          totalCount:0//总共多少条
        }
      }
    },
    created(){
        this.getDataByPage();
        this.getAllImeiData();
    }
  }
</script>

<style scoped>
	
</style>