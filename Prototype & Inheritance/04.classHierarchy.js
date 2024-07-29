class Figure {
    constructor(units = 'cm') {
        this.units = units;
    }

    get area() {
        return this.units * this.units;
    }

    changeUnits(value) {
        return this.units = value;
    }

    toString() {
        return `${this.area.toFixed(2)} ${this.units}`;
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
}

let circle = new Circle(7);
console.log(circle);
console.log(circle.toString());

let rectangle = new Rectangle(8, 9);
console.log(rectangle);
console.log(rectangle.toString());