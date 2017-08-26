var socket = io();

//上线
socket.on('onLine',function(data){
	showMsg(0,null);
	initUser(data);
});

//下线
socket.on('offLine',function(data){
	showMsg(1,data);
	console.log(data);
	//delUser(data);
});

// 接收来自服务器的上线通知
socket.on('loginInfo',function(msg){
	//alert(msg);
    //addMsgFromSys(msg);
    Messenger().post({
        message: msg,
        showCloseButton: true
    });
});

// 接收来自服务器的用户列表并将之添加到用户列表UI中
socket.on('userList',function(userList){
    // modify user count 修改用户数量
    // modifyUserCount(userList.length);
  addUser(userList);
});

// client review user information after login
// 将当前用户的信息显示回到当前客户端，提示给当前用户的欢迎信息
socket.on('userInfo',function(userObj){
  // should be use cookie or session
    userSelf = userObj;
  $('#spanuser').text('欢迎您！ '+userObj.name);
});

//接收群聊
socket.on('toAll',function(msgObj){
	console.log('client get toall');
	addMsgFromUser(msgObj,false);
});

socket.on('toOne',function(msgObj){
  Messenger().post({
    message: "<a href=\"javascript:showSetMsgToOne(\'"+msgObj.from.name+"\',\'"+msgObj.from.id+"\');\">"+msgObj.from.name + " send to you a message:"+ msgObj.msg+"</a>",
    showCloseButton: true
  });
});

// 接收服务器传过来的群聊图片，并渲染到聊天窗口
socket.on('sendImageToALL',function(msgObj){
  addImgFromUser(msgObj,false);
});