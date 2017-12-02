const express = require('express');

const router = express.Router();
const ImeiModel = require('../model/ImeiModel');



//get增加一个imei信息
router.get('/addimei/:imei',function(req,res,next){
    let imei = req.params.imei;
    ImeiModel.insertImeiAsync({imei:imei}).then(function(rs){
    	// res.redirect('/imei/showimei');
        res.json(rs.result);
    });
   
});

router.post('/pageimei',function(req,res,next){
    let options = {pageCount:req.body.pageCount,totalPage:req.body.totalPage};
    ImeiModel.findByPageAsync(options).then(function(rs){
        //console.log(rs);
        res.json(rs);
    });
})

router.post('/addmanyimei',function(req,res,next){
    //console.log(req.body);
    let datas = req.body;
    ImeiModel.insertManyAsync(datas).then(function(doc){
        res.json({'result':'ok'});
    });
});

//找一个imei信息
router.get('/findimei/:imei',function(req,res,next){
    let imei = req.params.imei;
    ImeiModel.findOneAsync({imei:imei}).then(function(doc){
        res.json(doc);
    });
});

//post 增加imei信息
router.post('/addimei',function(req,res,next){

});

//显示所有imei
router.get('/showimei',function(req,res,next){
    ImeiModel.findAllAsync().then(function(doc){
        res.json(doc);	
    });
});

//删除一个imei
router.get('/deleteimei/:id',function(req,res,next){
	let id = req.params.id;
    ImeiModel.deleteAsync({_id:id}).then(function(rs){
        //console.log(rs);
        res.json(rs.result);
    });
});

//删除多个 post
router.post('/deleteimei',function(req,res,next){
    let datas = req.body;
    console.log(datas);
    ImeiModel.deleteAsync({_id:{$in:datas}}).then(function(rs){
        console.log(rs.result);
        res.json(rs);
    })
});

//更新imei信息
router.get('/updateimei/:imei/:id',function(req,res,next){
    let imei = req.params.imei;
    let id = req.params.id;
    ImeiModel.updateAsync({_id:id},{imei:imei}).then(function(res){
        console.log(res);
    });
});




module.exports = router;



