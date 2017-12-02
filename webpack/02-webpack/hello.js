// class Hello{
//     show(){
//     	return 'hello world111aadfafdadfa这种aa';
//     }
// }

function Hello(){
	this.show = function(){
		return "1";
	}
}

// export default new Hello();  //es6的语法
module.exports = new Hello();  //nodejs CommonJs规范
// module.exports = 'hello world!!'
