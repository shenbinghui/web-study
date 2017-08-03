var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8181 });

wss.on('connection', function (ws) {
    console.log('client connected');
    
    //定时发送消息给前端
    setInterval(function(){
        //ws.send(getData());
        ws.send(Math.floor(Math.random()*10));
    },3000);



    //接收前端来的消息
    ws.on('message', function (message) {
        console.log(message);

    });
});

//模拟动态改变数据，发送消息到前端
function getData(){
	return Math.floor(Math.random()*10);
}

