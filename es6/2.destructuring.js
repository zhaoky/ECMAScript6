/**
 * Created by zhaoky on 2017/1/20.
 */
//2.变量的解构赋值

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

var { bar, foo } = { foo: "aaa", bar: "bbb" };

console.log(bar,foo);