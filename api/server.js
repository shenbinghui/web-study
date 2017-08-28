const http = require('http');//http
const api = require('./api');


let server = http.createServer((req,res)=>{

    api(req,res);

});

server.listen(3000);

+console.log('servre listen at 3000 ');
+console.log("+++");
console.log(1-console.log("---"));
console.log(+console.log('111'));