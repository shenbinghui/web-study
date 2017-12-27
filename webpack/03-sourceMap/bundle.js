/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("// class Hello{\r\n//     show(){\r\n//     \treturn 'hello world111aadfafdadfa这种aa';\r\n//     }\r\n// }\r\n\r\nfunction Hello(){\r\n\tthis.show = function(){\r\n\t\treturn \"1234\";\r\n\t}\r\n}\r\n\r\n// export default new Hello();  //es6的语法\r\nmodule.exports = new Hello();  //nodejs CommonJs规范\r\n// module.exports = 'hello world!!'\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxsby5qcz9kYmRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjbGFzcyBIZWxsb3tcclxuLy8gICAgIHNob3coKXtcclxuLy8gICAgIFx0cmV0dXJuICdoZWxsbyB3b3JsZDExMWFhZGZhZmRhZGZh6L+Z56eNYWEnO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBIZWxsbygpe1xyXG5cdHRoaXMuc2hvdyA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gXCIxMjM0XCI7XHJcblx0fVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBuZXcgSGVsbG8oKTsgIC8vZXM255qE6K+t5rOVXHJcbm1vZHVsZS5leHBvcnRzID0gbmV3IEhlbGxvKCk7ICAvL25vZGVqcyBDb21tb25Kc+inhOiMg1xyXG4vLyBtb2R1bGUuZXhwb3J0cyA9ICdoZWxsbyB3b3JsZCEhJ1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2hlbGxvLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var hello = __webpack_require__(0);  //CommonJs\r\n// import hello from './hello'   //es6标准\r\n\r\ndocument.write(hello.show());\r\n\r\n// document.write(require('./hello'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lbnRyeS5qcz8zZjFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUErQjtBQUMvQjs7QUFFQTs7QUFFQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGhlbGxvID0gcmVxdWlyZSgnLi9oZWxsbycpOyAgLy9Db21tb25Kc1xyXG4vLyBpbXBvcnQgaGVsbG8gZnJvbSAnLi9oZWxsbycgICAvL2VzNuagh+WHhlxyXG5cclxuZG9jdW1lbnQud3JpdGUoaGVsbG8uc2hvdygpKTtcclxuXHJcbi8vIGRvY3VtZW50LndyaXRlKHJlcXVpcmUoJy4vaGVsbG8nKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9lbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);