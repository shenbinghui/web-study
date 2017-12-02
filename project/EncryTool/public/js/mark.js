
$(function(){
	//有跨域问题
	$.get('http://www.baidu.com',function(data){
		console.log(data);
	})
});