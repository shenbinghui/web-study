// require("babel-core/register");

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve(5);
    })

}

async function aFun(){

	var rs = await myPromise();
	console.log(5);
}

aFun();