var cmd = {
	'cmd1':''
}

$(function(){
    var eraseCb = $('.erasetxt');
    //全选/反选
    $('#eraseCb').click(function(event){
        if($('#eraseCb').is(':checked')){
        	$('.erasetxt').prop('checked',true);
        }else{
            $('.erasetxt').prop('checked',false);
        }
    });

    //选中发送请求数据
    $('#eraseBtn').click(function(){
        var vals = [];
        eraseCb.each(function(){
        	if($(this).is(':checked')){
                vals.push($(this).val());
            }
        });

        // console.log(JSON.stringify(vals));
        $.post('/fastbooterase',{data:vals},function(rs){
 
        	if(rs.result === 'ok'){
        		alert('success!');
        	}else{
        		alert('fail');
        	}
        })

    });

});