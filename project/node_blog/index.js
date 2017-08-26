var path = require('path');
var express = require('express');
// var connect = require('connect');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
// var config = require('config-lite');
// var config = require('./config/default');
var config = require('config-lite')(__dirname);
var routers = require('./routes');
var pkg = require('./package');
//日志
var winston = require('winston');
var expressWinston = require('express-winston');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use(session({
	name:config.session.key,
	secret:config.session.secret,
	cookie:{
		maxAge:config.session.maxAge
	},
	store:new MongoStore({
        db:config.db,
        url:config.mongodb	
	})
}));

app.use(flash());
//处理表单上传中间件
app.use(require('express-formidable')({
	uploadDir:path.join(__dirname,'public/img'),
	keepExtensions:true
}));

app.locals.blog = {
	title:pkg.name,
	description:pkg.description
};

app.use(function(req,res,next){
	//这个地方是插入到ejs模板中的变量
	res.locals.user = req.session.user;
	res.locals.success = req.flash('success').toString();
	res.locals.error = req.flash('error').toString();

	next();
});

app.use(expressWinston.logger({
	transports:[
	    new (winston.transports.Console)({
            json:true,
            colorize:true
	    }),

	    new winston.transports.File({
	    	filename:'logs/success.log'
	    })
	]
}));

routers(app);

app.use(expressWinston.errorLogger({
	transports:[
	    new (winston.transports.Console)({
            json:true,
            colorize:true
	    }),

	    new winston.transports.File({
	    	filename:'logs/error.log'
	    })
	]
}));

// app.listen(config.port,function(){
// 	console.log(`${pkg.name} listening on port ${config.port}`);
// });

if(module.parent){
	module.exports = app;
}else{
	app.listen(config.port,function(){
	    console.log(`${pkg.name} listening on port ${config.port}`);
    });
}

app.use(function (err, req, res, next) {
  res.render('error', {
    error: err
  });
});
