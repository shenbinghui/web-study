
//分页配置 window 全局变量
var PAGE = {
    count:0,   //有多少页
    start:1,   //从第几页开始
    display: 5, //显示几页
    border: true,
    text_color: '#112233',
    background_color: 'none',
    text_hover_color: 'red',
    background_hover_color: 'none',
    images: false,
    rotate: true,
}

//每页显示10条记录
var PAGECOUNT = 8;

 
//获取所有数据
function getPlainData(){
	let template = '';
	$.get('/plain',function(data){
    	data.forEach(function(v,i){
            template+='<tr><td>'+(parseInt(i,10)+1)+'</td>'+
                      '<td>'+v.editdate.slice(0,10)+'</td>'+
                      '<td><div>'+v.content+'</div></td>'+
                      '<td><div><input id='+v._id+' type="button" value="查看" class="btn btn-primary btn-sm"></div></td>'+
                      '</tr>'
    	});

        $('tbody').html(template);

        $('tbody :input').click(function(){
	    	getTaskData(this.id);
	    });
    });
}

//获取某一个id对应的信息
function getTaskData(id){
	// $.post('/plain',{id:id},function(data){
	// 	console.log(data.result);
 //        var tmp = '<div><p>'+data.result[0].content+'</p>'
 //                  +'<input type="button" class="btn btn-primary btn-sm" style="margin-right:10px" value="修改" id="modefy">'
 //                  +'<input type="button" class="btn btn-primary btn-sm" value="删除" id="delete">'
 //                  +'</div>';
	// 	$('#item').html(tmp).dialog({
	// 		modal:true
	// 	});

 //        $("#modefy").click(function(){alert('modefy')});
 //        $("#delete").click(function(){alert('delete')});

	// })

	$.post('/plain',{id:id})
	    .done(function(data){
			console.log(data.result);
	        var tmp = '<textarea >'+data.result[0].content+'</textarea>'
                      +'<div>'
	                  +'<input type="button" class="btn btn-primary btn-sm" style="margin-right:10px" value="修改" id="modefy">'
	                  +'<input type="button" class="btn btn-primary btn-sm" value="删除" id="delete">'
	                  +'</div>';
			$('#item').html(tmp).dialog({
				modal:true
			});
		})
		.done(function(){
			$("#modefy").click(function(){
                $.post('/modefyPlain',{id:id,content:$("#item p textarea").val()}).done(function(data){
                	console.log(data.result);
                   $('#item').dialog('close');
                    // getPlainData();
                    initPaginator();
                });
			});

            $("#delete").click(function(){
                $.post('/deletePlain',{id:id}).done(function(data){
                	console.log(data.result);
                    $('#item').dialog('close');
                    // getPlainData();
                    initPaginator();
                });

            });
		})
}

//初始化分页
function initPaginator(){
    //第一次加载
    $.post('/postPageData',{skipData:0,pageCount:PAGECOUNT}).done(function(data){
        showPageData(data.result);
    });
    
    //响应分页的事件并加载
    PAGE.onChange = function(pagenum){
        let skipData = (pagenum-1)*PAGECOUNT;
        let pageCount = PAGECOUNT;
        $.post('/postPageData',{skipData:skipData,pageCount:pageCount}).done(function(data){
            // console.log(data.result);
            showPageData(data.result);
        });
    }
    
    $.get('/getCountPlain').done(function(data){
        // console.log(data.totalCount)
        PAGE.display = Math.ceil(data.totalCount/PAGECOUNT);
        PAGE.count = Math.ceil(data.totalCount/PAGECOUNT);
        console.log(PAGE.display)
        $("#demo4").paginate(PAGE);
    })
    
}

//显示分页的数据
function showPageData(data){
    let template = '';
    data.forEach(function(v,i){
        template+='<tr><td>'+(parseInt(i,10)+1)+'</td>'+
                  '<td>'+v.editdate.slice(0,10)+'</td>'+
                  '<td><div>'+v.content+'</div></td>'+
                  '<td><div><input id='+v._id+' type="button" value="查看" class="btn btn-primary btn-sm"></div></td>'+
                  '</tr>'
    });

    $('tbody').html(template);

    $('tbody :input').click(function(){
        getTaskData(this.id);
    });
}

$(function(){
	initPaginator();
    // getPlainData();
    
    $('#addBtn').click(function(){
    	$('#dialog').dialog({height:300,width:500,modal:true});
    });

    $('#cancel').click(function(){
    	$('#dialog').dialog('close');
    });

    $('#add').click(function(){
    	$.post('/addPlain',{content:$('.addTextArea').val()},function(data){
            if(data.result === 'ok'){
            	$('#dialog').dialog('close');
                // getPlainData();
                initPaginator();
                $('.addTextArea').val('');
            }else{
            	alert('创建失败！');
            }
    	})
    });
})