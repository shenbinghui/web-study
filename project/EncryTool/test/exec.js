let exec = require('child_process').exec;

// exec('node -v',(err,stdout,stderr)=>{
//     console.log(stdout);
// });

execCmd('node1 -v').then((data)=>{
	console.log(data);
},(err)=>{
	console.log(err);
});

function execCmd(cmd){
	return new Promise((resolve,reject)=>{
		exec(cmd,(err,stdout,stderr)=>{
			if(err){
				// console.log(err);
				// console.log(stderr);
				reject(err);
			}
		    
		    resolve(stdout);
		});
        
	});

	
}

