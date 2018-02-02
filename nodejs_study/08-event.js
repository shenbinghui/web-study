var events = require('events');
var eventEmitter = new events.EventEmitter();


//连接事件
// eventEmitter.on('connect',function(){
// 	console.log('connect success!');
    
//     eventEmitter.emit('data_received','abc');

// });


// //数据接收事件
// eventEmitter.on('data_received',function(data){
// 	console.log(data);
// 	console.log('data_received success!');
// });


// eventEmitter.emit('connect');


var util=require('util');
  
function _base(){
    this.emitter=new events.EventEmitter(this);
};
  
// util.inherits(_base,events.EventEmitter); //继承
  
_base.prototype.onEvent=function(eventName,callback){
    this.emitter.on(eventName,callback);
}
  
_base.prototype.emitEvent=function(eventName,arg){
    this.emitter.emit(eventName,arg);
}


var e = new _base();

e.onEvent('test',function(){
	console.log('test onEvent');
});

e.emitEvent('test');

