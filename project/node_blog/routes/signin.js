var express = require('express');
var sha1 = require('sha1');
var router = express.Router();
var UserModel = require('../models/users');

var checkNotLogin  = require('../middlewares/check').checkNotLogin;

router.get('/',checkNotLogin,function(req,res,next){
	// res.send(req.flash());
	//请求进入登录页面
	res.render('signin');
})

router.post('/',checkNotLogin,function(req,res,next){
	//1-获取前台提交的数据
	var name = req.fields.name;
	var password = sha1(req.fields.password);

	//2-比较数据库，成功则登录，失败，跳转到重新登录
    // var opts = {
    // 	name:name,
    // 	password:password
    // };

    // UserModel.find(opts).then(function(result){
    //     //登录成功，
    //     //1-写session
    //     var user = result.opts[0];
    //     delete user.password;
    //     req.session.user = user;
    //     //2-跳转到主页
    //     res.redirect('/posts');

    // }).catch(function(e){
    //     req.flash('error',e.message);
    //     res.redirect('/signin');
    // });

    UserModel.getUserByName(name).then(function(user){
    	console.log(user);
    	//1-如果用户不存在
    	if(!user){
    		req.flash('error','用户不存在');
    		return res.redirect('back');
    	}

    	//2-用户存在，检查密码是否匹配
    	if(user.password !== password){
            req.flash('error','用户名或密码错误');
            return res.redirect('back');
    	}

    	req.flash('success','登录成功');
    	delete user.password;
    	req.session.user = user;
    	res.redirect('/posts');
    }).catch(next);

});

module.exports = router;
