/**
 * Created by zhaoky on 2017/1/19.
 */
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

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10