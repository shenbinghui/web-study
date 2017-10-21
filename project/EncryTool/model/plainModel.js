const mongoose = require('./dbconnect');
const BaseModel = require('./BaseModel');

let Schema = mongoose.Schema;

let plainSchema = new Schema({
	editdate:{type:Date,default:Date.now},
	content:{type:String}
});

let plainModel = mongoose.model('plain',plainSchema);

class PlainModel extends BaseModel{
	constructor(){
		super(plainModel); 
	} 
    // 分页获取数据
	getPageData(conditon){
		return plainModel.find({}).sort({'editdate':'desc'}).skip(conditon.skipData).limit(conditon.pageCount).exec();
	}
    //按时间降序排序
	find(condition){
        return plainModel.find(condition).sort({'editdate':'desc'}).exec();
	}
};

module.exports = new PlainModel();


