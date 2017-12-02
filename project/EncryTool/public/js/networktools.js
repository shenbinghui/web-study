

$(function(){
    // alert(123);
    
    
    var domainResult = "";
    $("#domainBtn").click(function(){
    	var domainName = $("#domainName").val();
    	if(domainName == ''){
    		alert('不能为空');
    		return;
    	}

    	$.post('/network',{domain:domainName},function(result){
    		for(var i=0;i<result.data.length;i++){
    			domainResult+='<a href= http://'+ result.data[i] +'>'+result.data[i]+'</a><br>';
    		}
    		// $('#ipAddress').text(JSON.stringify(data.data));
    		$('#ipAddress').html(domainResult);
	        
	    });
    });
    
});