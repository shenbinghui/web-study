const fs = require('fs');

var fileName = 'package.json';
var outputName = 'text.json';

//-----------------------------------------------------------------------
// fs.readFile('./package.json',function(err,data){
//     //console.log(data); //buffer字节
//     console.log(data.toString());
// })


//-----------------------------------------------------------------------
//读流
// var readStream  = fs.createReadStream(fileName);
// readStream.setEncoding('utf-8');

// readStream.on('data',function(chunk){
//     console.log(chunk);
// });

// readStream.on('end',function(){
// 	console.log('read end!');
// });

// readStream.on('error',function(err){
//     console.log(err.stack);
// });

//-----------------------------------------------------------------------
//写流
var data='这是一段将要写入到流文件的数据hahahah';
var writeStream = fs.createWriteStream('./'+ outputName);
writeStream.write(data);
writeStream.end();

writeStream.on('finish',function(){
	console.log('write finish!');
});

writeStream.on('error',function(err){
    console.log(err.stack);
});


//-----------------------------------------------------------------------
// var writeStream = fs.createWriteStream('./'+outputName);
// var readStream = fs.createReadStream('./'+fileName);

// //管道流，读一个文件到管道，并通过流再去写入
// readStream.pipe(writeStream);