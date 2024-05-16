// 윈시타입 : 변경이 불가능한 자료형
// 참조타입 : 변경이 가능한 자료형

let str = 'hello';
console.log(str)
console.log(str[0])
console.log(str.length)
console.log(str.toUpperCase())

let a = 10;
console.log(typeof(a));

let b = '10';
console.log(typeof(b));

let c = 10.1;
console.log(typeof(c));

let d = true;
console.log(typeof(d));

let e = null;
console.log(typeof(e));

let f = undefined;
console.log(typeof(f));

let h = {};
console.log(typeof(h));

let i = [];
console.log(typeof(i));

let j = function(){};
console.log(typeof(j));

let k = (a) => { console.log(a); };
console.log(typeof(k));
k('hello')