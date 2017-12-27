/*
（写/创建）/读/（编辑/修改/更新）/删除
*/
var express = require('express');
var router = express.Router();

var PostModel = require('../models/posts');
var CommentModel = require('../models/comments');
var checkLogin = require('../middlewares/check').checkLogin;

router.get('/',function(req,res,next){
    // res.render('posts');
    // console.log(req.params);
    var author = req.query.author;

    PostModel.getPosts(author)
    .then(function (posts) {
      res.render('posts', {
        posts: posts
      });
    })
    .catch(next);
});

//提交文章
router.post('/',checkLogin,function(req,res,next){
    // res.send(req.flash());
    //创建文章
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;

    //校验参数
    try{
        if(!title.length){
        	throw new Error('标题不能为空');
        }

        if(!content.length){
        	throw new Error('内容不能为空');
        }
    }catch(e){
        req.flash('error',e.message);
        res.redirect('back');
    };

    var post = {
    	author:author,
    	title:title,
    	content:content,
    	pv:0
    }

    PostModel.create(post)
    .then(function(results){
        post = results.ops[0];
        req.flash('success','发表成功');
        res.redirect(`/posts/${post._id}`);
    })
    .catch(next);
});

//进入创建文章页面
router.get('/create',checkLogin,function(req,res,next){
    // res.send(req.flash());
    res.render('create');
});

//根据文章id，打开一篇文章
router.get('/:postId',checkLogin,function(req,res,next){
	//res.send(req.flash());
    var postId = req.params.postId;
    //console.log(req.params);
    Promise.all([
        PostModel.getPostById(postId),
        CommentModel.getCommentsByPostId(postId),// 获取该文章所有留言
        PostModel.incPv(postId)
    ]).then(function(result){
        // console.log(result);
        var post = result[0];
        var comments = result[1];
        if(!post){
            throw new Error('文章不存在！');
        }

        res.render('post',{
            post:post,
            comments:comments
        });
    }).catch(next);
});

//获取指定文章，并编辑
router.get('/:postId/edit',checkLogin,function(req,res,next){
	//res.send(res.flash());
    var author = req.session.user._id;
    var postId = req.params.postId;

    PostModel.getRawPostId(postId).then(function(post){
        if(!post){
            throw new Error('该文章不存在！');
        }
        //console.log(post);
        if(post.author._id.toString() !== author.toString()){
            throw new Error('权限不足！');
        }

        res.render('edit',{
            post:post
        });
    }).catch(next);

});

//编辑文章后发表
router.post('/:postId/edit',checkLogin,function(req,res,next){
	//res.send(res.flash());
    var author = req.session.user._id;
    var postId = req.params.postId;
    var title = req.fields.title;
    var content = req.fields.content;


    PostModel.updatePostById(postId,author,{title:title,content:content})
    .then(function(){
        req.flash('success','编辑文章成功');
        res.redirect(`/posts/${postId}`);
    }).catch(next);

});

//删除一篇文章    
router.get('/:postId/remove',checkLogin,function(req,res,next){
    //res.send(res.flash());
    //console.log('123');
    var postId = req.params.postId; //restful 风格
    var author = req.session.user._id;
    //console.log(postId);
    PostModel.delPostById(postId,author).then(function(){
        req.flash('success','删除成功');
        res.redirect('/posts');
    }).catch(next);
});

//提交留言
router.post('/:postId/comment',checkLogin,function(req,res,next){
    var comment = {
        content:req.fields.content,
        postId :req.params.postId,
        author : req.session.user._id
    }
    CommentModel.create(comment).then(function(){
        req.flash('success','留言成功');
        res.redirect('back');
    }).catch(next);
});

//
router.get('/:postId/comment/:commentId/remove',checkLogin,function(req,res,next){
    //res.send(res.flash());
    var commentId = req.params.commentId;
    var author = req.session.user._id;
    CommentModel.delCommentById(commentId,author).then(function(){
        req.flash('success','删除留言成功'); 
        res.redirect('back');
    }).catch(next);
});

module.exports = router;

