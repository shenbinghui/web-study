var fs = require('fs');
// var async = require('asyncawait/async');
// var await = require('asyncawait/await');

console.log(1);
//Promise
function asyncReadFile(filename){
	return new Promise((resolve,reject)=>{
		fs.readFile(filename,function(err,data){
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		})
	})
}

//Promise
// asyncReadFile('./package.json1').then(data=>{
// 	console.log(data.toString());
// },err=>{
// 	console.log(err);
// })

//Generator
// var gen = function* (){
// 	var f1 = yield asyncReadFile('./package.json');
// 	var f2 = yield asyncReadFile('./cmd.js');
// 	console.log(f1.toString());
// 	console.log(f2.toString());
// }

//async
async function as(){
	var f1 = await asyncReadFile('./package.json');
	var f2 = await asyncReadFile('./04-cmd.js');
	console.log(f1.toString());
	console.log(f2.toString());
};

var rs = as();
console.log(rs);

// (async (function testingAsyncAwait() {
//     await (console.log("For Trump's Sake Print me!"));
// }))();


