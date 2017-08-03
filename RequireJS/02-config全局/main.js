require.config({
	// baseUrl : "D:/project/my_web/web-study/RequireJS/02-config全局",
	paths:{
		//'jquery':'http://libs.baidu.com/jquery/2.0.3/jquery'  //不需要带.js
		// 'jquery':['../../lib/jquery.min']  //本地加载
		'jquery':['http://libs.baidu.com/jquery/2.0.3/jquery','../../lib/jquery.min'] //前一个加载网络js不成功，就加载后面的本地js
	}
});

require(['jquery','a'],function($,a){
	$(function(){
		//alert(123);
		a.show();
		$("#test").text("hello");
	})
});