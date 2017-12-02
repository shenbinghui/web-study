<template>
	<div></div>
</template>

<script>
export default{
	props:['isLogin'],
	data:function(){
		return {
            login:true
		}
	},
	created:function(){
		if(this.login){
	      this.$alert('这是一段内容', '标题名称', {
	          confirmButtonText: '确定',
	          callback: action => {
	            this.$message({
	              type: 'info',
	              message: `action: ${ action }`
	            });
	          }
        	});
   		}
	}
}
</script>

<style scoped>
	
</style>