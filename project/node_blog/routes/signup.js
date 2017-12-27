/*
用户注册
*/
var fs = require('fs');
var path = require('path');
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin  = require('../middlewares/check').checkNotLogin;

router.get('/',checkNotLogin,function(req,res,next){
	// res.send(req.flash());
	res.render('signup');
})

router.post('/',checkNotLogin,function(req,res,next){
	//res.send(req.flash());
	// console.log(req);
	var name = req.fields.name;
	var password = req.fields.password;
	var repassword = req.fields.repassword;
	var gender = req.fields.gender;
	var bio = req.fields.bio;
    var avatar = req.files.avatar.path.split(path.sep).pop();

    // try{
    //     if(!name.length >= 1 && name.length <= 10){
    //     	throw new Error('名字请限定在1~10个字符');
    //     }
    //     if (['m', 'f', 'x'].indexOf(gender) === -1) {
	   //    throw new Error('性别只能是 m、f 或 x');
	   //  }
	   //  if (!(bio.length >= 1 && bio.length <= 30)) {
	   //    throw new Error('个人简介请限制在 1-30 个字符');
	   //  }
	   //  if (!req.files.avatar.name) {
	   //    throw new Error('缺少头像');
	   //  }
	   //  if (password.length < 6) {
	   //    throw new Error('密码至少 6 个字符');
	   //  }
	   //  if (password !== repassword) {
	   //    throw new Error('两次输入密码不一致');
	   //  }
    // }catch(e){
    //     // console.log(e.message);
    //     fs.unlink(req.files.avatar.path);
        
    //     req.flash('error', e.message);
    //     return res.redirect('/signup');
    // }

    //密码加密
    password = sha1(password);
    // console.log(password);

    var user = {
    	name:name,
    	password:password,
    	bio:bio,
    	gender:gender,
    	avatar:avatar
    };

    UserModel.create(user).then(function(result){
    	user = result.ops[0];
    	console.log(result);
    	delete user.password;
    	req.session.user = user;

    	req.flash('success','注册成功');
    	res.redirect('/posts');
    }).catch(function(e){
    	fs.unlink(req.files.avatar.path);

    	if(e.message.match('E11000 duplicate key')){
    		req.flash('error','用户名已被占用');

    		return res.redirect('/signup');
    	}

    	next(e);
    }); 
});

module.exports = router;
