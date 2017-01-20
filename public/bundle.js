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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://127.0.0.1:8888/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Created by zhaoky on 2017/1/20.
	 */
	//2.变量的解构赋值
	
	//2.1数组
	
	var a = 1,
	    b = 2,
	    c = 3; //模式匹配,右边必须是数组
	
	var _ref = [1, 2, 3],
	    d = _ref[2];
	var e = 1,
	    f = [2, 3, 4, 5];
	var g = 1,
	    h = 2,
	    i = [3, 4, 5];
	
	var _ref2 = [1],
	    j = _ref2[0],
	    k = _ref2[1],
	    l = _ref2.slice(2);
	
	// 默认值，惰性求值
	// let [x = 1, y = x] = [];     // x=1; y=1
	// let [x = 1, y = x] = [2];    // x=2; y=2
	// let [x = 1, y = x] = [1, 2]; // x=1; y=2
	// let [x = y, y = 1] = [];     // ReferenceError
	
	
	console.log(a);
	console.log(d);
	console.log(e, f);
	console.log(g, h, i);
	console.log(j, k, l);
	
	//2.2

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map