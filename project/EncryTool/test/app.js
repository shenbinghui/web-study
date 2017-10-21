// async function f() {
//   return await 123;
// }

// f().then(v => console.log(v))

const timer = require('./module_exports');

var time5 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('time out 5s');
            resolve();
        }, 5000)
    })

}

var time1 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('time out 1s');
            resolve();
        }, 1000)
    })

}


async function f() {
    var Flag = false;
    if (Flag) {
        console.log('start');
        await time5();
        await time1();
        console.log('end');
    } else {
        console.log('start');
        await timer.time5();
        await timer.time1();
        console.log('end');
    }

}

f();