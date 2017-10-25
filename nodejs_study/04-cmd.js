var exec = require('child_process').exec;

console.log(111);
exec('adb shell',(err,stdout,stderr)=>{
    console.log(err);
    console.log(stdout);
    console.log(stderr);
});