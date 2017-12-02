const url = require('url');
const querystring = require('querystring');
const exec = require('child_process').exec;


module.exports = function(req, res) {

    let urlPath = url.parse(req.url);
    let path = urlPath.pathname;

    console.log(urlPath.pathname);
    res.writeHead(200,{"Access-Control-Allow-Origin": "*"});

    if (path == '/favicon.ico') {
        res.end();
    } 
    // 测试接收表单post请求
    else if (path == '/post') {
        var data='';
        req.on('data',function(chunk){
            data+=chunk;
        });

        req.on('end',function(){
            console.log(data);
            res.write('{"status":"success"}');
            res.end();
        })
    } 
    //测试获取login返回一个数据：[json]
    else if (path == '/login') {
        res.write('[{"name":"test1","pwd":"1001"},{"name":"test2","pwd":"1002"},{"name":"test3","pwd":"1003"}]');
        res.end();
    } 
    // 测试vue-resourse post
    else if (path == '/vuepost') {
        var data='';
        req.on('data',function(chunk){
            data+=chunk;
        });

        req.on('end',function(){
            console.log(data);
            res.write('{"status":"success"}');
            res.end();
            
        })
    } 
    // 测试vue-resourse jsonp
    else if (path == '/jsonp') {
        var _data = { name: 'example@163.com', pwd: 'jaxu' }; //这个是要返回的json对象

        let query = querystring.parse(urlPath.query);
        let _callback = query.callback; //如果是jsonp就会有callback函数

        if (_callback) {
            // res.type('text/javascript');
            res.write(_callback + '([' + JSON.stringify(_data) + '])'); //封装成jsonp返回格式数据
            console.log('解决跨域问题');
            res.end();
        } else {
            res.write(_data);

            res.end();
        }

    }
    //让设备重启
    else if (path == '/reboot') {
        //这里接收post表单数据
        var postData = "";
        req.on("data", function(data) {
            postData += data;
        });

        req.on("end", function() {
            let query = querystring.parse(postData);
            console.log(query);
            exec(query.reboot, (err, stdout, stderr) => {
                if (err || stderr) {
                    res.write('success');
                } else {
                    res.write('success');
                }
                res.end();
            });
        });
    } else if(path == '/html'){
         var fs = require('fs');
         console.log(123);
         res.writeHead(200, {'Content-type' : 'text/html',"Access-Control-Allow-Origin": "*"});
         //nodejs原生的只有输入文件流的方式，text,需要输入html,还得先都文件，再写，可以自己封装。没现成的。express就有现成的可用
         fs.readFile('./test.html',function (err,data){
            res.end(data);
         });
    }
    else {
        res.write('<h1>nat port111!</h1>');
        res.end();
    }
}
