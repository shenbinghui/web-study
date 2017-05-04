const http = require('http');

const api = require('./api');

http.createServer((req,res)=>{

    api(req,res);

}).listen(3000);

console.log('servre listen at 3000 ');