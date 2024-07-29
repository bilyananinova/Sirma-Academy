class Shape {
    calculateArea() {

    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super()
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends Shape {
    constructor(side) {
        super()
        this.side = side;
    }

    calculateArea() {
        return Math.pow(this.side, 2);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let triangle = new Triangle(13, 20);
console.log(`${triangle.calculateArea()}`);

let square = new Square(6);
console.log(`${square.calculateArea()}`);

let circle = new Circle(9);
console.log(`${circle.calculateArea()}`);



