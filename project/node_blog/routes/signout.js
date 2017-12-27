var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

router.get('/',checkLogin,function(req,res,next){
	//res.send(req.flash());
	//登出
	//1-清除session
	req.session.user = null;
    //2-写提示信息
    req.flash('success','登出成功');
	//3-登出后跳转到主页
	res.redirect('/posts');
});

module.exports = router;