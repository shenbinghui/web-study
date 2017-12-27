var User = require('../lib/mongo').User;


module.exports = {
	//插入一条数据到数据库中
	create:function(user){
		//return User.create(user).exec();
		return User.insertOne(user).exec();
	},
	//从数据库中条件找数据库
	find:function(opts){
		return User.find().select(opts).exec();
	},
	getUserByName:function(name){
		return User.findOne({name:name}).addCreateAt().exec();
	}
}