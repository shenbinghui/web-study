var app = require('express')();
var http = require('http').Server(app);
// console.log(http);
var io = require('socket.io')(http);

io.on('connection',function(socket){
    console.log('a user has connected!');
    socket.on('disconnect',function(){
    	console.log('a user disconnected!');
    });

    socket.on('chat message',function(data){
        console.log('message:'+data);
        io.emit('chat message',data);
    });
});

app.get('/', function(req, res){
	res.sendFile(__dirname+'/index.html');
  // res.send('<h1>Headfafafllo worlda</h1>');
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});