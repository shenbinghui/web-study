
function showMsg(type,msg) {
	// if(typeof msg == 'Object'){
 //        msg = [];
	// }
	if(type == 0)
        $.scojs_message('This is an user online', $.scojs_message.TYPE_OK);
    if(type == 1)
    	$.scojs_message(msg.name+' 下线了！', $.scojs_message.TYPE_OK);
}

function showSetMsgToOne(name,id){
    $('#setMsgToOne').modal();
    $('#myModalLabel1').text("Send to "+name);
    toOneId = id;
}

// add user in UI
// 将服务器传送过来的用户列表userList渲染到UI界面之中
// 在chat.js中被调用
// userList是一个数组，因此需要循环遍历，将每一个数组元素遍历出来，并插入列表
function addUser(userList){
    var parentUl = $('.user-content').children('ul');
    var cloneLi = parentUl.children('li:first').clone();
    parentUl.html('');
    parentUl.append(cloneLi);
    for(var i in userList){
        var cloneLi = parentUl.children('li:first').clone();
        cloneLi.children('a').attr('href',"javascript:showSetMsgToOne('"+userList[i].name+"','"+userList[i].id+"');");
        cloneLi.children('a').children('img').attr('src',userList[i].img);
        cloneLi.children('a').children('span').text(userList[i].name);
        cloneLi.show();
        parentUl.append(cloneLi);
    }
}

//初始化用户列表
function initUser(userList){
	addUser(userList);
}

//用户下线，删除用户
function delUser(user){
    //把删除用户从前端删除，不显示
}

// 封装函数
// check is the username exist.
// 判断列表中是否存在已经设置了的用户ID
function checkUser(name){
    var haveName = false;
    var liLists = $(".user-content ul li");
    // console.log(liLists.length);
    $.each(liLists,function(index,value){
    	// console.log(liLists[index].innerText);
        if(name == liLists[index].innerText){
            haveName = true;
        }
    });
    return haveName;
}

function addMsgFromUser(msgObj,isSelf){
    var msgType = isSelf?"message-reply":"message-receive";
    var msgHtml = $('<div><div class="message-info"><div class="user-info"><img src="/images/1.jpg" class="user-avatar img-thumbnail"></div><div class="message-content-box"><div class="arrow"></div><div class="message-content">test</div></div></div></div>');
    msgHtml.addClass(msgType);
    msgHtml.children('.message-info').children('.user-info').children('.user-avatar').attr('src',msgObj.from.img);
    msgHtml.children('.message-info').children('.user-info').children('.user-avatar').attr('title',msgObj.from.name);
    msgHtml.children('.message-info').children('.message-content-box').children('.message-content').text(msgObj.msg);
    $('.msg-content').append(msgHtml);
    //滚动条一直在最底
    $(".msg-content").scrollTop($(".msg-content")[0].scrollHeight);
}

// 将发送的图片显示在聊天窗口
function addImgFromUser(msgObj,isSelf){
    var msgType = isSelf?"message-reply":"message-receive";
    var msgHtml = $('<div><div class="message-info"><div class="user-info"><img src="/images/1.jpg" class="user-avatar img-thumbnail"></div><div class="message-content-box"><div class="arrow"></div><div class="message-content">test</div></div></div></div>');
    msgHtml.addClass(msgType);
    msgHtml.children('.message-info').children('.user-info').children('.user-avatar').attr('src',msgObj.from.img);
    msgHtml.children('.message-info').children('.user-info').children('.user-avatar').attr('title',msgObj.from.name);
    msgHtml.children('.message-info').children('.message-content-box').children('.message-content').html("<img src='"+msgObj.img+"'>");
    $('.msg-content').append(msgHtml);
    //滚动条一直在最底
    $(".msg-content").scrollTop($(".msg-content")[0].scrollHeight);
}


$(function(){
    // 弹出添加用户窗口
    $('#myModal').modal({
        //backdrop: 'static',
        keyboard: false
    });

    $('#btn-setName').click(function(){
        var name = $('#username').val();
        // 判断用户ID是否为空或者是否已经存在
        // 若输入的用户名ID为空或者用户列表中已经存在一样的用户名，则弹出提示
        //alert(name);
        if(checkUser(name)){
            $('#username').val('');
            alert('Nickname already exists or can not be empty!');
        }else{
            // 否则执行添加用户处理程序
            var imgList = ["/images/1.jpg","/images/2.jpg","/images/3.jpg","/images/4.jpg","/images/5.jpg"];
            var randomNum = Math.floor(Math.random()*5);
            // random user
            // 随机设置用户的头像，头像图片从imgList从随机取出
            var img = imgList[randomNum];
            // package user
            // 打包用户信息
            var dataObj = {
                name:name,
                img:img
            };
            // send user info to server
            // 将该用户所设置的信息发送到服务器
            socket.emit('login',dataObj);
            //hide login modal
            // 隐藏设置用户名称对话框
            $('#myModal').modal('hide');
            // 清空用户信息
            $('#username').val('');
            // 聊天窗口获取焦点
            $('#msg').focus();
        }
    });

    // 发送群聊信息请求
	$('#sendMsg').click(function(){
	    var msg = $('#msg').val();
	    if(msg==''){
	      alert('Please enter the message content!');
	      return;
	    }
	    var from = userSelf;
	    var msgObj = {
	      from:from,
	      msg:msg
	    };
	    console.log(msgObj);
	    socket.emit('toAll',msgObj);
	    addMsgFromUser(msgObj,true);
	    $('#msg').val('');
	});

	// 发送单聊请求
	$('#btn_toOne').click(function(){
	    var msg = $('#input_msgToOne').val();
	    if(msg==''){
	      alert('Please enter the message content!');
	      return;
	    }
	    var msgObj = {
	        from:userSelf,
	        to:toOneId,
	        msg:msg
	    };
	    socket.emit('toOne',msgObj);
	    $('#setMsgToOne').modal('hide');
	    $('#input_msgToOne').val('');
	});
    
    //处理图片
	$('#sendImage').change(function(){
    if(this.files.length != 0){
        var file = this.files[0];
        // 教程中不使用var来定义reader，在我使用过程会报错
        var reader = new FileReader();
        if(!reader){
            alert("!your browser doesn\'t support fileReader");
            return;
        }
        reader.onload = function(e){
            //console.log(e.target.result);
            var msgObj = {
                from:userSelf,
                img:e.target.result
            };

            console.log(msgObj);

            socket.emit('sendImageToALL',msgObj);
            addImgFromUser(msgObj,true);
        };
        console.log(file);

        reader.readAsDataURL(file);
    }
});
});