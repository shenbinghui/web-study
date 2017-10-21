onmessage = function (event) {
    //从1加到num
    var num = event.data;
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }
    postMessage(result);
}

[1,1,1,2,2,"a","b","a"].filter(function(value,index,arr){
	//过滤条件false过滤掉，true不过滤
    var tmp = [];
	for(var i=0;i<arr.length;i++){
		if(tmp.indexOf(arr[i]) < 0){
			return 1;
		}
		
	}
});

var arr = [1,3,1,2,2,"a","b","a"];

function alone(arr){
	

	return tmp;
}