<template>
	<div>
		<el-dialog title="提示" v-model="dialogVisible" size="tiny">
		  <span>点击登录按钮就登录成功</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary"  @click="loginStatus">登录</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
export default{
	props:['isLogin'],
	data:function(){
		return {
            dialogVisible: true

		}
	},
	created:function(){
		
	},
	methods:{
		loginStatus:function(){
			//alert(1);
			this.dialogVisible = false;
			sessionStorage.setItem('islogin',true);
			this.$message('登录成功！');
		}
	},

	watch:{
		'$route':function(to,from){
		 	var login =  sessionStorage.getItem('islogin');
		 	// alert(login+'=111');
		 	if(!login){
                this.dialogVisible = true;
		 	}else{
		 		this.dialogVisible = false;
		 	}
   	     }
   	}

}
</script>

<style scoped>
	
</style>