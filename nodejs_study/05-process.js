/**
process对象用于处理与当前进程相关的事情，
它是一个全局对象，可以在任何地方直接访问到它而无需引入额外模块。 
它是 EventEmitter 的一个实例。
*/

//事件exit
process.on('exit',function(){
    console.log('退出前执行！');
})