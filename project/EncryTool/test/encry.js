const fs = require('fs');

encryptFile('./data.txt');
//decryptFile('./jiami_old.ini');

//使用Promise
function encryptFile(fileName){
	var promise = new Promise((resolve,reject) =>{
		fs.readFile(fileName ,(err,data)=>{
			//加密算法 ascii 值+1
		    for(let i=0;i<data.length;i++){
		    	data[i] +=1;
		    }

		    resolve(data);
	    });
	});

	promise.then((data)=>{
		fs.writeFile('./encfyfile.txt',data,(err,data)=>{
        	console.log(data);
        });
	});
}

//回调嵌套
function decryptFile(fileName){
	fs.readFile(fileName ,(err,data)=>{
		//加密算法 ascii 值+1
	    for(let i=0;i<data.length;i++){
	    	data[i] -=1;
	    }
         
        fs.writeFile('./2.txt',data,(err,data)=>{
        	console.log(data);
        });
	});
}