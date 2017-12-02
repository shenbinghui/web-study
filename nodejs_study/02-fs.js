const fs = require('fs');

fs.readFile('./package.json',function(err,data){
    //console.log(data); //buffer字节
    console.log(data.toString());
})