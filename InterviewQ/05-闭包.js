//用nodejs执行

function test1(){
    for(var i=0;i<5;i++){
        setTimeout(function(){
        	console.log(i);
        },1000);
    }
}

// test1();
/*
执行结果：5 5 5 5 5
原因：setTimeout是异步执行，当for循环完成之后，在执行打印i的操作
      此时，i变量处在test1函数的环境中，累计操作之后i=5,所以最终
      输出5个5
*/

//使用闭包解决
function test2(){
    for(var i=0;i<5;i++){
    	(function(j){
    		setTimeout(function(){
        		console.log(j);
        	},1000);
    	})(i);
    }
}

// test2();
/*
执行结果：0 1 2 3 4
原因：for循环体内嵌套一个立即执行函数，j变量只在当前的执行体内，每次
      循环之后的j就保存i传入的当前值，所以，可以得到正确的结果

*/

//let 
function test3(){
    for(let i=0;i<5;i++){
        setTimeout(function(){
        	console.log(i);
        },1000);
    }
}

// test3();


function myPromise(i){
	return new Promise((resolve,reject)=>{
        resolve(i)
	});
}
//async/await
async function test4(){
    for(var i=0;i<5;i++){
       var r = await myPromise(i);
       console.log(r);
    }
}

test4();