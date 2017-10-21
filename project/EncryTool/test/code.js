var str='abc';
var star ='☆';
var char='a';
// var arr  = [0x31,0x32,0x33,0x34];
var arr = [0x1B,0x0E ,0x30 ,0x3A,0x53,0x42,0x4C,0x00 ,0x3C,0x0A,0x7E];
var buffer = Buffer.from('this is a tést');  // 默认采用utf8
// console.log(Buffer.from(str)); //Buffer 是十六进制的结果  <Buffer 61 62 63>  是数组
// console.log(new Buffer('123'));
// console.log(new Buffer([0x31,0x32])); 
// console.log((new Buffer([0x31,0x32])).toString());  //12

// console.log('ÿ'.charCodeAt(0).toString(16));  //把第1个字符(任意古怪的)转化16进制
// console.log(String.fromCharCode('0x7f'));   //把16进制转字符 0x00~0xff  超出就不认识了

// var a=15;
// console.log(a.toString(2));  //to  2
// console.log(a.toString(8));  //to 10
// console.log(a.toString(16)); //to 10
// console.log(a.toString(10)); //to 10


// console.log(parseInt('00001000',2)); //2 to 10

// console.log(Buffer.from(star));
// console.log(buffer);

console.log(Buffer.from(arr).toString());