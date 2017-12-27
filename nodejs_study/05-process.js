/**
process对象用于处理与当前进程相关的事情，
它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块。 
它是 EventEmitter 的一个实例。
*/

//事件exit
process.on('exit', function() {
    // 设置一个延迟执行
    setTimeout(function() {
        console.log('主事件循环已停止，所以不会执行');
    }, 0);
    console.log('退出前执行');
});

setTimeout(function() {
    console.log('1');
}, 1000);



//uncaughtException,捕获没有被try catch的事件
process.on('uncaughtException', function() {
    console.log('捕获到一个异常');
});

var a = '123';
//a.a(); //触发异常事件
//console.log('这句话扑街了，不会显示出来');


//事件sigint  捕获当前进程接收到的信号 如按下了 ctrl + c
process.on('SIGINT',function(){
	console.log('收到 sigint 信号');
});

console.log('发送一个ctrl+c信号。。。');

setTimeout(function(){
	console.log('SIGINT end');
},5000)

//stdout stdin,stderr标准输入输出
//process.stdout.write('hello world!\n');
process.stdin.on('end',function(){
	process.stdout.write('stdout end\n');
})

function gets(cb){
	process.stdin.setEncoding('utf-8');
	process.stdin.resume();
	process.stdin.on('data',function(chunk){
        console.log('gets start');
        process.stdin.pause();
        cb(chunk);
	});
 }

 gets(function(result){
 	console.log('['+ result +']');
 	process.stdin.emit('end'); //触发end事件
 })

 //process argv
console.log(process.argv); 
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
    //console.log(array);
});


//process.cwd 返回当前进程的工作目录
console.log(process.cwd());

//process.execPath 获取当前进程的这个可执行文件的绝对路径

//process.env 获取当前系统环境信息的对象，常规可以用来进一步获取环境变量、用户名等系统信息

//process.pid 获得当前进程的pid