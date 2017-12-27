var SerialPort = require("serialport");  //引入模块
var portName = 'COM14'; //定义串口名
var serialport = new SerialPort(portName,{
    baudRate:115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
});

serialport.on('data',function(data){
    console.log(data.toString());
});

