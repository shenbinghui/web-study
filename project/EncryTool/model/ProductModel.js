const mongoose = require('./dbconnect');
const BaseModel = require('./BaseModel');

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
	productName:{type:String},
	mark:{type:String},
	imgName:{type:String}
});

let productModel = mongoose.model('product',ProductSchema);

class ProductModel extends BaseModel{
	constructor(){
		super(productModel);
	}
}

module.exports = new ProductModel();