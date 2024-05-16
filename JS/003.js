// var, const[상수], let[변수] : 블록 스코프
const X = 10;
let x = 10;

{
    let y = 10;
}

console.log(X)
// console.log(y)