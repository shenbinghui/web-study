<template>
	<div id='update' class='content'>
	    <div class='title'>
	    	<h3>更新</h3>
	    </div>   
	    <div class='file'>
	    	<p>手动更新</p>
	    	<el-upload 
		    	class='upload-demo'
		    	ref='upload'
		    	action='#'
		    	:on-preview='handPreview'
		    	:on-remove='handRemove'
		    	:on-change='handChange'
		    	:data='upData'
		    	:before-upload='handBeforeUpload'
		    	:auto-upload='false'>
		    	<el-button slot='trigger' type='primary' size='small'>选择文件</el-button>
	    	    <div slot='tip' class='el-upload__tip'>文件大小不能超过50KB</div>
	    	    <input type='hidden' v-mode='hideData'>
	    	</el-upload>
	    </div>
	    <div class='update'>
	    	<el-button type='info' :disabled='disable' size='small' @click='uploadFileBtn'>更新</el-button>
	    	<p>更新进行过程中，请不要关闭浏览器或者拔掉设备。</p>
	    </div>
	</div>
</template>

<script>

export default{
	data:function(){
		return {
			disable:false,
			// fileList:[{name:'test1'}],
			test:'test',
			upData:{name:'testttt'}
		}
	},
	methods:{
		handChange(file,fileList){
            console.log('handChange:'+file);
		},
		handRemove(file,fileList){
            console.log('handRemove:'+file);
		},
		handPreview(file){
			console.log('handPreview:'+file);
		},
		uploadFileBtn(){
			console.log('uploadFileBtn');
		},
		handBeforeUpload(file){
			console.log('handBeforeUpload:'+file);
		}
	},
	watch:{

	}
}
</script>

<style scoped>
.content {padding:20px 30px 5px 30px;min-height:400px;}
.content .title {border-bottom:1px #ccc solid; padding:0 0 8px 0;}
.content .title h3{color:#20a0ff}

.content .file{padding:20px 0 10px 0;}
.content .file p{font-weight: bold;padding:2px 0;}

.content .update{border-top:1px solid #bbb;padding:10px 0 0 0;}
.content .update p{font-size:12px;padding-top:5px;}

</style>