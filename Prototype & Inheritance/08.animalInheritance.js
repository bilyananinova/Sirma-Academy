class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} - eat something delicious`;
    }

    sleep() {
        return `${this.name} - ZzzzZZZZ`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} on ${this.age} years old - barks loudly`
    }
}

class Cat extends Animal {
    meow() {
        return `${this.name} on ${this.age} years old - meow loudly`
    }
}

let dog = new Dog('Denis', 9);
console.log(dog.eat());
console.log(dog.sleep());
console.log(dog.bark());

let cat = new Cat('Radka', 16);
console.log(cat.eat());
console.log(cat.sleep());
console.log(cat.meow());