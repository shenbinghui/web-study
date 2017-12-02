
module.exports = function(app){
    /*++  一级目录重定向  ++*/
	app.get('/',(req,res,next)=>{
        res.render('index',{page:'encry',encrydata:null});
	});

    /*++ 导航加载相关页模板和数据 ++*/
	app.get('/page/:whitch',(req,res,next)=>{
		let pageName = req.params.whitch;
		switch(pageName){
            case 'encry':
                res.render('index',{page:pageName,encrydata:null});
                break;
            case 'tianqi':
                res.render('index',{page:pageName,data:1});
                break;
            default:
                res.render('index',{page:pageName});
                break;
		}
	});

    /*++  加/解密文件  ++*/
	app.post('/encry',require('./encry').postEncry);
	app.post('/decry',require('./encry').postDecry);

    /*++  fastboot 擦出烧写  ++*/
	app.post('/fastbooterase',require('./fastboot').postFastEarse);

    /*++  天气查询  ++*/
	app.get('/tianqi',require('./tianqi').getTianqi);	  
    
    /*++  网络相关应用  ++*/
    app.get('/network',require('./network').getNetwork); //获取数据
    app.post('/network',require('./network').postNetwork); //发送数据

    /*++ 工作计划  ++*/
    app.get('/plain',require('./workPlain').getPlainData);  //获取所有数据
    app.post('/plain',require('./workPlain').postPlainData);  //获取某一个id的信息
    app.post('/addPlain',require('./workPlain').postAddPlain);  //增加一条工作任务
    app.post('/deletePlain',require('./workPlain').postDeleteById); //删除工作内容
    app.post('/modefyPlain',require('./workPlain').postModefyById); //修改工作内容
    app.get('/getCountPlain',require('./workPlain').getCount);  //获取总记录数
    app.post('/postPageData',require('./workPlain').postPageData); //获取分页数据

    /*++  产品列表  ++*/
    app.post('/uploadimg',require('./product').uploadImg);
    app.post('/addproduct',require('./product').addProduct); //增加产品，包含提交图片逻辑
    app.get('/showproduct',require('./product').showProduct);//显示所有产品（无需分页，因为产品也就那么几个，不会超过20个）
    app.get('/deleteproduct',require('./product').deleteProduct);//删除一个产品
    app.get('/modefyproduct',require('./product').modefyProduct); //修改一个产品
}