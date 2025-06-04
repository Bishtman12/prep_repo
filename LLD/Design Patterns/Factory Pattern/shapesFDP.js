//* Purpose: To encapsulate object creation logic, so the calling code doesn’t need to know the exact class being instantiated.


class Shape {
    draw() {
        throw new Error("Override this method.");
    }
}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log("Drawing a Circle.");
    }

    area() {
        console.log((Math.PI * (this.radius) * (this.radius)))
        return true
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a Square.");
    }
}

class Triangle extends Shape {
    draw() {
        console.log("Drawing a Triangle.");
    }
}

class ShapeFactory {
    static create(type, options) {
        switch (type) {
            case "circle": return new Circle(options.radius);
            case "square": return new Square();
            case "triangle": return new Triangle();
            default: throw new Error("Shape not supported.");
        }
    }
}

const shape = ShapeFactory.create("circle", { radius: 7 });
shape.draw();
shape.area();

