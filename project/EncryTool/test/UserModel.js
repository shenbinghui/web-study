const mongoose = require('../model/dbconnect');

const MySchema = mongoose.Schema;

const UserSchema = new MySchema({
	name:{type:String},
	age:{type:Number}
});

mongoose.model('AAA',UserSchema);

module.exports.SSS  = function(){
	return {model:mongoose.model('AAA')}
};

