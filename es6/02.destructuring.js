/**
 * Created by zhaoky on 2017/1/20.
 */
//2.变量的解构赋值
// 数组的解构赋值
// 对象的解构赋值
// 字符串的解构赋值
// 数值和布尔值的解构赋值
// 函数参数的解构赋值
// 圆括号问题
// 用途

//2.1数组

// var [a,b,c] = [1,2,3];  //模式匹配,右边必须是数组
//
// let [,,d] = [1,2,3];
//
// let [e,...f]  = [1,2,3,4,5];
//
// let [g,h,...i]  = [1,2,3,4,5];
//
// let [j,k,...l]  = [1];

// 默认值，惰性求值
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError


// console.log(a);
// console.log(d);
// console.log(e,f);
// console.log(g,h,i);
// console.log(j,k,l);

//2.2对象的解构赋值
//
// var { bar, foo } = { foo: "aaa", bar: "bbb" };
//
// console.log(bar,foo);
// let a = 1;
// {
//     let a = 2;
//     console.log(a);
//
//    // let a = 2;
//    // let a = 2;
// }
// console.log(a);
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
var {c:b} = {c:"111"};

console.log(b);
console.log(c);