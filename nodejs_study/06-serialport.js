var SerialPort = require("serialport");  //引入模块
var portName = 'COM12'; //定义串口名
var serialport = new SerialPort(portName,{
    baudRate:115200,
    // dataBits: 8,
    // parity: 'none',
    // stopBits: 1,
    // flowControl: false,
    autoOpen:false   //当关闭autoOpen选项，你将要自己打开串口
});

serialport.open(function(error){
    if(error){
        console.log('打开'+portName+'失败！'+error);
        return;
    }

    //监听串口发送的数据
    // serialport.on('data',function(data){
    //     console.log(data.toString());
    // });
    
    //向串口写数据
    //serialport.write('at+test=10');
    // serialport.write('at',function(err,data){
    //     console.log(data);
    // });

    serialport.write(new Buffer('at+plminf=1,10,"222222111111115"\n'),function(err,data){
        console.log(data);
    });
    //console.log(serialport.read('at+plminf=0,10'));

});

// SerialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//     console.log(port.pnpId);
//     console.log(port.manufacturer);
//   });
// });

