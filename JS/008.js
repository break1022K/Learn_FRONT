for(let a = 0; a <= 10; a += 1) {
    console.log('log : ' + a);
}

const x = [10, 20, 30];
x.push(40);

// Explorer NOT [for of]
const val1 = [10, 20, 30];
for(const i of val1) {
    console.log('log :', i);
}

// only return index (index == key)
for(const i in val1) {
    console.log('log :', i);
}

const val2 = [10, 20, 30];
val2.forEach(i => {
    console.log('log :', i);
});

const val3 = [10, 20, 30];
val3.forEach((i, index, arr) => {
    console.log('log :', i, index, arr);
});

let s = 0;
for(let i = 0; i < 101; i += 2) {
    console.log('log :', i);
    s += i;
}
console.log('log :', s);

let num = 0;
while(num < 11) {
    console.log('log :', num);
    num += 1;
}

// break, continue

let value1 = [10, 20, 30];
console.log('log :', Math.max(...value1));

const { food1, food2, food3 } = {
    food1: '과일',
    food2: '채소',
    food3: '육류'
};
console.log(food1, food2, food3);

function test(a = 10, b = 200, c = 3000) {
    console.log(a, b, c);
}
test(c = 10, b = 20, a = 30);