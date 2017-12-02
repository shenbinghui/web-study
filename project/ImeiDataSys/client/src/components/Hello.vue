<template>
  <div class="hello">
      <el-input v-model="input" placeholder="请输入内容" style='width:20%'></el-input>
      <el-button type="primary" style='width:10%'>查询</el-button>
      <el-button type="primary" style='width:10%'>增加</el-button>
      <el-button type="primary" style='width:10%'>导入</el-button>
  </div>
</template>

<script>
export default {
  name: 'hello',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imeiArr:[{
        "_id": "599aaa0a7e03541c988d414f",
        "imei": "998"
        },
        {
        "_id": "599aaa0c1cbcc517281756ac",
        "imei": "123456789012345"
        },
        {
        "_id": "599ab2f4f2e1c603f8629304",
        "imei": "123456789012345"
        },
        {
        "_id": "599abf6ac53bc823d822b170",
        "imei": "666666"
        },
        {
        "_id": "599b95a725a7a41ee0ad926b",
        "imei": "123"
        },
        {
        "_id": "599b95be53ab542360b9d672",
        "imei": "123"
        },
        {
        "_id": "599b95e57c01450060ab7628",
        "imei": "123"
        },
        {
        "_id": "599b95fa712bf620f8e44f8e",
        "imei": ":123"
        },
        {
        "_id": "599b966335838e1f1895da86",
        "imei": "123444"
        }]
    }
  },

  created:function(){
      //http://127.0.0.1:3000/imei/showimei/
      this.axios.get(this.rootUrl+'imei/showimei/').then((res) =>{
        this.imeiArr = res;
        console.log(res.data);
      });
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
