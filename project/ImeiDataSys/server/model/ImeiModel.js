const mongoose = require('mongoose');
const dbconfig = require('../config/db');

mongoose.connect(dbconfig.mongodb);

let Schema = mongoose.Schema;

let ImeiSchema = new Schema({
    imei:{type:String}   //imei号
});

let ImeiModel = mongoose.model('ImeiModel',ImeiSchema);


module.exports = {
    insert:function(options){
    	let imei = new ImeiModel(options);

        imei.save(function(err,res){
		    if(err){
		    	console.log('err:'+err);
		    }else{
		    	console.log('res:'+res);
		    }
		})
    },
    insertImeiAsync:function(options){
    	let imei = new ImeiModel(options);
        return imei.save();
    },
    insertManyAsync:function(datas){
        return ImeiModel.create(datas);
    },

    update:function(condition,options){
        ImeiModel.update(condition,options,function(err,res){

        })
    },
    findAllSync:function(options){
        ImeiModel.find(options,function(err,res){
            
        });
    },
    findAllCallback:function(cb){
    	ImeiModel.find({},cb);
    },
    findAllAsync:function(){
    	return ImeiModel.find({}).exec();
    },
    findOneAsync:function(options){
        return ImeiModel.findOne(options).exec();
    },
    findByPageAsync:function(options){
        return ImeiModel.find({}).skip(options.totalPage).limit(options.pageCount).exec();
    }, 
    deleteAsync:function(options){
        return ImeiModel.remove(options).exec();
    },
    getCountAsync:function(options){
    	return ImeiModel.count(options).exec();
    },
    updateAsync:function(conditions,options){
        return ImeiModel.update(conditions,options).exec();
    }
};