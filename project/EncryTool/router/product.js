
// module.exports = {
// 	addProduct:(req,res,next)=>{

// 	},

// 	showProduct:(req,res,next)=>{

// 	},

// 	deleteProduct:(req,res,next)=>{

// 	},
	
// 	modefyProduct:(req,res,next)=>{

// 	}
// }

const formidable = require('formidable'); //formidable 上传文件插件
const ProductModel = require('../model/ProductModel');

// 这里特意使用class语法
class Product{
    constructor(){

    }

	addProduct(req,res,next){
        // return ProductModel.add(data);
	}

	showProduct(req,res,next){
        ProductModel.find({}).then((data)=>{
        	res.json({rs:data});
        });
	}

	deleteProduct(req,res,next){

	}
	
	modefyProduct(req,res,next){

	}

	uploadImg(req,res,next){
		let form = new formidable.IncomingForm();

		form.encoding = 'utf-8';
		form.uploadDir = 'public/upload';
		form.keepExtensions = true;  //保留后缀
		form.maxFieldsSize = 2*1024*1024;  //2M
		form.parse(req,function(err,fields,files){
            if(err){
            	res.send(err);
            	return;
            }
            
            //fields 是提交的请求参数  files是提交的文件
            // console.log(fields.productName);
            // console.log(fields.mark);
            // console.log(files.uploadimg.path);
            ProductModel.add({productName:fields.productName,mark:fields.mark,imgName:files.uploadimg.path}).then((data)=>{
                console.log(data);
            	res.json({rs:files.uploadimg.path});
            });     
		})


	}
}

module.exports = new Product();