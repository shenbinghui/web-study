(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//add.js
module.exports = function add(a,b){
    return a + b;
};
},{}],2:[function(require,module,exports){
//main.js
var sum = require('./sum');
var values = [ 1, 2, 4, 5, 6, 7, 8, 9 ];
var answer = sum(values)
 
document.getElementById("answer").innerHTML = answer;
},{"./sum":4}],3:[function(require,module,exports){
//reduce.js
module.exports = function reduce(arr, iteratee) {
  var index = 0,
    length = arr.length,
    memo = arr[index];
 
  index += 1;
  for(; index < length; index += 1){
    memo = iteratee(memo, arr[index])
  }
  return memo;
};
},{}],4:[function(require,module,exports){
//sum.js
var reduce = require('./reduce');
var add = require('./add');
 
module.exports = function(arr){
  return reduce(arr, add);
};
},{"./add":1,"./reduce":3}]},{},[2]);
