function sum(x, y) {
    let z = x + y;

    console.log(z);

    return z;
}

(sum(10, 20) + sum(1, 3));

const avengers = ['IronMan', 'SpiderMan', 'Hulk', 'Thor']
console.log(avengers.sort());

const testdate1 = [1, 11, 2, 22, 23];
console.log(testdate1.sort());

const testdate2 = [1, 11, 2, 22, 23];
console.log(testdate2.sort((a, b) => a - b)); // 오름차순
console.log(testdate2.sort((a, b) => b - a)); // 내림차순

const arr = ['참외', '키위', '감귤'];
arr.forEach(item => {
    console.log(item);
    console.log(item.repeat(2));
});

let obj1 = {
    key1: 'value1',
    key2: 'value2'
};
console.log(obj1.key1);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

switch(1) {
    case 1:
        case 2:
            console.log('Apply!2');
        break;
    break;
}