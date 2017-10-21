// module.exports = function(a){
// 	console.log(a);
// }

module.exports = {
	time5:  function(){
		return  setTimeout(function(){console.log('time out 5s')},5000)
	},
	time1:  function(){
		return  setTimeout(function(){console.log('time out 1s')},1000)
	}
}