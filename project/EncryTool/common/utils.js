const exec = require('child_process').exec;

module.exports={
	sendCmd:function(cmd){
                return new Promise((resolve,reject)=>{
                	exec(cmd,(err,stdout,stderr)=>{
                		if(err){
                			reject(stderr);
                		}
                        resolve(stdout);
                	})
                })
	}
}