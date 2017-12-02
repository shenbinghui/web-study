<template>
	<div id="more">
	    <h3>SD卡共享</h3>
		<template v-if='sdcard'>
			<div class='nosdcard'>
				
				<p>找不到 microSD 卡。</p>
			</div>
		</template>
		<template  v-else>
			<div class='nosdcard'>
				<p>找不到 microSD 卡。</p>
			</div>
		</template>
	</div>
</template>

<script>
export default{
	data:function(){
		return {
			message:'更多',
			sdcard:false
		}
	}
}
</script>

<style scoped>
#more{min-height: 400px;padding:10px 10px 0 15px;}
h3{color:#20a0ff;font-size:25px;border-bottom:1px solid #bbb;padding:0 0 8px 10px;}
.nosdcard p{text-align:center;font-size:14px;margin:5px 0 0 -40%;font-weight: bold;}
</style>