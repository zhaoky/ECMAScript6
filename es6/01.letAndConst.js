/**
 * Created by zhaoky on 2017/1/19.
 */
//let和const命令

// {
// 	let c = 10;
// 	var b = 20;
// }
//
// console.log(c,b);

// for(let i=0;i<10;i++){
//
// }
// console.log(i);  //not defined

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6](); // 10
 
// console.log(foo);  //单独报错
// var foo = 1;        //变量提升（hoisting）

//let 不存在变量提升  todo http://www.tuicool.com/articles/viUZFbj http://blog.csdn.net/huangjq36sysu/article/details/51085674
// console.log(bar);  //单独报错
// let bar = 1;        //变量提升（hoisting）

// var tmp = 123;
// //let babel编译出来不存在暂时性死区TDZ
// if (true) {
// 	tmp = 'abc'; // ReferenceError
// 	console.log(tmp);
// 	let tmp;
// }
//ES6规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。

// // 报错 不允许重复声明
// (function () {
// 	let a = 10;
// 	let a = 12;
// })();

	
//变量提升
// var tmp = new Date();
//
// function f() {
// 	console.log(tmp);
// 	if (false) {
// 		var tmp = "hello world";
// 	}
// }
//
// f(); // undefined

//变量泄露
// var s = 'hello';
//
// for (var i = 0; i < s.length; i++) {
// 	// console.log(s[i]);
// }
//
// console.log(i); // 5

//ES6的块级作用域
// function f1() {
// 	let n = 5;
// 	if (true) {
// 		let n = 10;
// 	}
// 	console.log(n); // 5
// }
// f1();
//ES6允许块级作用域的任意嵌套
// {{{{
// 	{let insane = 'Hello World'}
// 	console.log(insane); // 报错
// }}}}
//块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。

//ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
//ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。


//ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。