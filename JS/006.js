
function TypeCheck(value) {
    const return_value = Object.prototype.toString.call(value);
    const type = return_value.substring(
        return_value.indexOf(' ') + 1,
        return_value.indexOf(']')
    );

    return type.toLowerCase();
}

/*
typeof(value) === 'number'
TypeCheck(value) === 'number'
*/

let str1 = 'hello';
str1[0] // 'h'
str1.length // s
str1.toUpperCase() // 'HELLO'

console.log('   abc '.trim())

let a = 1
console.log('abc : ' + a)
console.log(TypeCheck(10.1))
console.log(`10 + 3 = ${10 + 3}`)

let n_h = '123hello'
console.log(`parseInt('${n_h}') : ${parseInt(n_h)}`); // 권장
console.log(`parseFloat('${n_h}') : ${parseFloat(n_h)}`);
console.log(`Number(n_h) : ${Number(n_h)}`); // 비권장

console.log(`isNaN('5') : ${isNaN('5')}`);
console.log(`isNaN(3) : ${isNaN(3)}`);
console.log(`isNaN('b3') : ${isNaN('b3')}`);
console.log(`isNaN('3b') : ${isNaN('3b')}`);
console.log(isNaN(undefined)); // true 출력 즉, 비권장

// ES6에서 추가 도입
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true

// 논리 자료형
// javascript는 소문자입니다.
// 그래서 실수가 많이 일어납니다. object(dict)

let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= z); // true
console.log(x <= z); // true
console.log(x == z); // true
console.log(x != z); // false
console.log(x === y); // false
console.log(x !== y); // true

console.log(true && true);
console.log(true || true);

console.log(true && false);
console.log(true || false);

console.log(!true)
console.log(!!null)

let an;
console.log(an);

let bn = null;
console.log(bn);