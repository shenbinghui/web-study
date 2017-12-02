const plainModel = require('../model/plainModel');

exports.getPlainData = (req,res,next)=>{
	plainModel.find({}).then(function(data){
        res.json(data);
	});
}

exports.postPlainData = (req,res,next)=>{
	let id = req.body.id;
	let condition = {
		_id:id
	}
    plainModel.find(condition).then((data)=>{
        res.json({result:data});
    });
}

exports.postAddPlain = (req,res,next)=>{
	let content = req.body.content;
	plainModel.add({content:content}).then((data)=>{
		res.json({result:'ok'});
	},(err)=>{
        console.log(err);
        res.json({result:'fail'});
	})
}

exports.postDeleteById = (req,res,next)=>{
	let id = req.body.id;
	let condition = {
		_id:id
	}
	plainModel.delete(condition).then((data)=>{
        res.json({result:data});
    });
}

exports.postModefyById = (req,res,next)=>{
	let id = req.body.id;
	let content = req.body.content;
	let condition = {
		_id:id
	};
	let data = {
        content:content
	};

	plainModel.modefy(condition,data).then((data)=>{
        res.json({result:data});
    });
}

//获取数据
exports.getCount = (req,res,next)=>{
	plainModel.count({}).then((data)=>{
		res.json({totalCount:data});
	})
}

exports.postPageData = (req,res,next)=>{
	let condition = {
		skipData:parseInt(req.body.skipData,10),
		pageCount:parseInt(req.body.pageCount,10)
	}

	plainModel.getPageData(condition).then((doc)=>{
		// console.log(doc);
        res.json({result:doc});
	});
}