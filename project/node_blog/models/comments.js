var marked =require('marked');
var Comment = require('../lib/mongo').Comment;

Comment.plugin('contentToHtml',{
	afterFind:function(comments){
        return comments.map(function(comment){
            comment.content = marked(comment.content);
            return comment;
        });
	}
});

module.exports = {
	create:function(comment){
		return Comment.create(comment).exec();
	},
	//删除一个留言
	delCommentById:function(commentId,author){
        return Comment.remove({author:author,_id:commentId}).exec();
	},
	//删除文章的所有留言，文章不存在了，留言必须全部删除
    delCommentsByPostId:function(postId){
        return Comment.remove({postId:postId}).exec();
    },
    //根据文章id，获取所有留言，按创建时间升序
    getCommentsByPostId:function(postId){
        return Comment.find({postId:postId})
               .populate({path:'author',model:'User'})
               .sort({_id:-1})
               .addCreateAt()
               .contentToHtml()
               .exec();
    },
    //通过文章id获取留言数
    getCommentsCount:function(postId){
    	return Comment.count({postId:postId}).exec();
    }
}