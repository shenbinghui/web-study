// var http = require('http');
// var server = http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type": "text/event-stream"});
//     //res.writeHead(200, {"Content-Type":"text/event-stream", "Cache-Control":"no-cache", "Connection":"keep-alive"});
//     setInterval(function(){
//         res.write(new Date().getTime());
//     },1000);
    
// }).listen(8083);

// console.log('listen at 8083');

var http = require("http");
http.createServer(function(request, response){
  response.writeHead(200, { "Content-Type": "text/event-stream" ,"Access-Control-Allow-Origin": "*"});
  setInterval(function(){
    var content = "data:" +
      new Date().toISOString() + "\n\n";
    response.write(content);
    }, 1000);
  }).listen(8099);