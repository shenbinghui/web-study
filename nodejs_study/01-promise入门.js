const request = require('request');


// 请求的url和header
const options = {
  url: 'https://api.github.com/repos/cpselvis/zhihu-crawler',
  headers: {
    'User-Agent': 'request'
  }
};
// 获取仓库信息
const getRepoData = () => {
  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
};

// getRepoData()
//   .then((result) => console.log(result))
//   .catch((reason) => console.error(reason));

// 此处如果是多个Promise顺序执行的话，如下：
// 每个then里面去执行下一个promise
// getRepoData()
//   .then((value2) => {return promise2})
//   .then((value3) => {return promise3})
//   .then((x) => console.log(x))

var promise = new Promise((resolve,reject)=>{
  resolve(111);
});

promise.then(value =>{
  console.log(value);
  return 2;
})
.then(value => {
  console.log(value);
});
