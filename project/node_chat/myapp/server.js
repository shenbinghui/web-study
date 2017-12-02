var io = require('socket.io')();
var _ = require('underscore');

var userList = [];
var currUser = {};

io.on('connection',function(socket){
	//发送上线消息
	//向其他用户发送广播消息，自己不收
    //socket.broadcast.emit("onLine",userList);
    io.emit("onLine",userList);

	// login function
    // 接收客户端提交的登录事件(login)
    socket.on('login',function(user){
        // user就是客户端传过来的dataObj对象
        // 为每个用户设置一个id，这个id是服务器分配的唯一标识，永不重复
        user.id = socket.id;
        // 将客户端传输过来的(设置的)用户存储到userList对象
        userList.push(user);
        //把当前用户放到环境中
        currUser = user;
        // socketList.push(socket);
        // send the userlist to all client
        // 将用户列表传输到每一个客户端，以显示出在线的用户
        //向所有客户发送消息，包括自己
        io.emit('userList',userList);
        // send the client information to client
        // 向当前连接的客户端发送信息，并未向所有用户进行广播
        // 也就是说将当前用户(也即是刚刚向服务器发送请求的用户)的信息发回给自身，提示给当前用户的欢迎信息
        socket.emit('userInfo',user);
        // 注意，userList和userInfo事件传输的都是对象
        // loginInfo传输的是字符串
        // send login info to all.
        // 向所有客户端发送该用户上线的信息
        socket.broadcast.emit('loginInfo',user.name+"上线了。");
    });

    // console.log('有一个用户已经登录了！');
    socket.on('disconnect',function(){
    	// console.log('用户下线了！');
    	socket.broadcast.emit("offLine",currUser);
    	//更新userList
    	userList = _.without(userList,currUser);
    	io.emit('userList',userList);

    });

    //群聊
    socket.on('toAll',function(msg){
    	// console.log('server get toALL');
        socket.broadcast.emit('toAll',msg);
    });

    socket.on('toOne',function(msgObj){
	    // 单聊时根据唯一标识id查询用户
	    // 从我们所有的用户中查询出msgObj.to的用户的id然后就行发送
	    var toSocket = _.findWhere(io.sockets.sockets,{id:msgObj.to});
	    console.log(toSocket);
	    // 只有目标用户会接收到这条响应派发事件
	    toSocket.emit('toOne', msgObj);
	});

    // 群聊发送图片处理请求程序
	socket.on('sendImageToALL',function(msgObj){
	    // 由服务器作为中转，将图片信息发送到除了自己以外的每一个客户端
	    socket.broadcast.emit('sendImageToALL',msgObj);
	})
});





exports.listen = function(server){
	io.listen(server);
}