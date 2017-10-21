
//提交前验证
function validate(){
	//这个地方开始验证字段
    //productName
    if($('#productName').val() == null){
    	alert('产品名不能为空！');
    	return false;
    }
    //mark
    if($('#mark').val() == null){
        alert('备注点什么吧！');
        return false;
    }
    //image
    var imgpath = $('#image1').val();
    var pathArr = imgpath.split('.');
    var imgType = pathArr[pathArr.length-1];
    if(imgType == 'jpg' || imgType == 'png'){
        var size = $('#image1')[0].files[0].size;
        if(size > 1024*1024*2){
        	alert('图片大小不要超过2M啊');
        	return false;
        }
    }else{
    	alert('不是jpg或者png图片!');
    	return false;
    }

    return true;
}

$(function(){
	
	$('#add').click(function(){
		$('#formdata').show(1000);
		// $('#hide').removeClass('hide_display').addClass('show_display');
		$('#hide').removeAttr('disabled','disabled');

	});

	$('#hide').click(function(){
		$('#formdata').hide(1000);
		$('#hide').attr('disabled','disabled');
	});

	$('#imgForm').ajaxForm((data)=>{
		console.log(data);
		$('#formdata').hide(1000);
	})

    //展现数据
    $.ajax({
        async:'true',
        type:'get',
        url:'/showProduct',
        data:null,
        dataType:'json',
        timeout:10*1000,
        success:function(data){
            
            var productlist = '';
            for(var v of data.rs){
                var path = v.imgName.substr(6);
                productlist += "<div class='list'>"+
                "<img src="+path+" alt='device' style='width:180px;height:120px'>"+
                "<div><span>型号:</span><strong>"+v.productName+"</strong></div>"+
                "<div><span>说明:</span></div>"+
                "<div style='font-size:12px;width:180px'>"+v.mark+"</div>"+
                "</div>";
            }

            $('#productList').html(productlist);
        }
    })

})


