module.exports = {
    checkLogin:function(req,res,next){
    	//如果没有登录，就去登录页面
    	if(!req.session.user){
    		req.flash('error','未登录');
    		return res.redirect('/signin');
    	}

    	next();
    },

    checkNotLogin:function(req,res,next){
    	//如果登录了
    	if(req.session.user){
            req.flash('error','已登录');
            return res.redirect('back');//返回之前的页面
    	}

    	next();
    }
}