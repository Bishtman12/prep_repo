//? 2. OPEN/CLOSED PRINCIPLE (OCP)
//* Definition: Classes should be open for extension but closed for modification.
//* You should be able to add new functionality without changing existing code.

//! ❌ BAD EXAMPLE - Need to modify existing code to add new shapes
class BadAreaCalculator {
    calculateArea(shapes) {
        let totalArea = 0;

        for (let shape of shapes) {
            if (shape.type === 'rectangle') {
                totalArea += shape.width * shape.height;
            }
            else if (shape.type === 'circle') {
                totalArea += Math.PI * shape.radius * shape.radius;
            }
            //! To add triangle, we need to modify this method ❌
        }
        return totalArea;
    }
}

//* ✅ GOOD EXAMPLE - Open for extension, closed for modification
class Shape {
    calculateArea() {
        throw new Error('calculateArea method must be implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
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

//* Adding new shape doesn't require modifying existing code ✅
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

class GoodAreaCalculator {
    calculateArea(shapes) {

        for (const shape of shapes) {
            console.log(shape.constructor.name, " --> ", shape.calculateArea());
        }
        return true
    }
}


console.log('2. Open/Closed Principle:');

const shapes = [
    new Rectangle(5, 4),
    new Circle(3),
    new Triangle(6, 8)
];
const calculator = new GoodAreaCalculator();
console.log('Total area:', calculator.calculateArea(shapes));
console.log();