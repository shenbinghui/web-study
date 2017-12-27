var config = require('../config/default');
var Mongolass = require('mongolass');
var mongolass = new Mongolass();
var moment = require('moment');

var objectIdToTimeStamp = require('objectid-to-timestamp');
//创建数据库连接
mongolass.connect(config.mongodb);

//根据id生成创建时间 create_at
mongolass.plugin('addCreateAt',{
	afterFind:function(results){
        results.forEach(function(item){
            item.create_at = moment(objectIdToTimeStamp(item._id)).format('YYYY-MM-DD HH:mm');
        });

        return results;
	},
	afterFindOne:function(result){
        if(result){
        	result.create_at = moment(objectIdToTimeStamp(result._id)).format('YYYY-MM-DD HH:mm');
        }

        return result;
	}
});

//用户模型
exports.User = mongolass.model('User',{
	name:{type:'string'},
	password:{type:'string'},
	avatar:{type:'string'},
	gender:{type:'string',enum:['m','f','x']},
	bio:{type:'string'}
})

exports.User.index({name:1},{unique:true}).exec();

//文章模型
exports.Post = mongolass.model('Post',{
	author:{type:Mongolass.Types.ObjectId},
	title:{type:'string'},
	content:{type:'string'},
	pv:{type:'number'}

});

exports.Post.index({author:1,_id:-1}).exec();


exports.Comment = mongolass.model('Comment',{
	author:{type:Mongolass.Types.ObjectId},
	content:{type:'string'},
	postId:{type:Mongolass.Types.ObjectId}
});

exports.Comment.index({ postId: 1, _id: 1 }).exec();// 通过文章 id 获取该文章下所有留言，按留言创建时间升序
exports.Comment.index({ author: 1, _id: 1 }).exec();// 通过用户 id 和留言 id 删除一个留言