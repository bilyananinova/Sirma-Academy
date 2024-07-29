class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    print() {
        return `This is make-${this.make}, model-${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(doors, make, model) {
        super(make, model);
        this.doors = doors;
    }

    print() {
        return `This is make-${this.make}, model-${this.model} with ${this.doors} doors`;
    }
}

class Bike extends Vehicle {
    constructor(type, make, model) {
        super(make, model);
        this.type = type;
    }

    print() {
        return `This is make-${this.make}, model-${this.model}, type-${this.type}`;
    }
}

let car = new Car(5, 'Chevrolet', 'Corvette');
console.log(car.print());

let bike = new Bike('street', 'Harley-Davidson', 'Sportster');
console.log(bike.print());