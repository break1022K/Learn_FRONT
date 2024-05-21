class Animal {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name}.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    bark() {
        console.log('Woof!');
    }
}

const dog = new Dog('Buddy', 'Labrador');
dog.sayHello(); // Hello, I'm Buddy.
dog.bark(); // Woof!