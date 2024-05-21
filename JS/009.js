function a() {
    console.log(this);
}

let obj = {
    val: 100,
    f: function() {
        console.log(this);
    }
}

obj.f();

const person = {
    name: 'Jhon',
    age: 30,
    city: 'New York'
};

for(let key in person) {
    console.log(key);
}

const arr = [10, 20, 30];
for(let key in arr) {
    console.log(key);
}

const arr2 = [10, 20, 30];
for(let key of arr2) {
    console.log(key);
}

// const person2 = {
//     name: 'Jhon',
//     age: 30,
//     city: 'New York'
// };

// for(let key of person2) {
//     console.log(key);
// }

let m = new Map();

m.set('One', '1');
m.set(1, 'One');
m.set(true, 1);
m.set(false, 0);