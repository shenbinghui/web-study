
//async await
//1、格式
//2、await 后面跟一个promise 或一般函数/值类型
//3、返回值 return 可有可无
//4、await异常，直接退出函数，后面不再执行

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
    	console.log('err');
      return downloadFallbackData(url)  // returns a promise
        .then(v => {
          return processDataInWorker(v); // returns a promise
        }); 
    })
    .then(v => {
    	console.log('suc');
      return processDataInWorker(v); // returns a promise
    });
}


var downloadData  = function(url){
	return new Promise((resolve,reject)=>{
		console.log('downloadData');
        //reject(url)
        throw new Error('123');
	});
}

var downloadFallbackData  = function(url){
	return new Promise((resolve,reject)=>{
		console.log('downloadFallbackData');
        resolve(url)
	});
}

var processDataInWorker  = function(url){
	return new Promise((resolve,reject)=>{
		console.log('processDataInWorker');
        resolve(url)
	});
}

async function getData(url){
	let v;
	try{
        v = await downloadData(url);
	}catch(e){
        v = await downloadFallbackData(url);
	}

	return processDataInWorker(v);

}

// getData().then(data=>{console.log(data)});
//getProcessedData('abc').then(data=>{console.log(data)});



// var p  = function(url){
// 	return new Promise((resolve,reject)=>{
//         resolve(url)
// 	});
// }

// var a = p('adb').then((data)=>{return '123'});

// console.log(a.then(data=>{console.log(data)}));

// async function read(){

// 	//console.log(await 1);

// 	//return 2;
// }

// var r = read();
// console.log(r);





//file 

// const fs  =  require('fs');

// var name = fs.readdirSync(__dirname).filter(function(dname){
//   return !dname.endsWith('.txt');
// });

// console.log(name);

//stream

// const fs = require('fs');

// const rs = fs.createReadStream('./async_await.js','utf-8');

// rs.on('data',function(chunk){
//     console.log(chunk);
// });

// rs.on('end',function(){
//     console.log('end');
// })

function callback(middleware){
  var a = 1;
  return function(){
      console.log(middleware);
  }
}

callback('hello');