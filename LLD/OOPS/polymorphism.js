/**
 * Key points about JavaScript Polymorphism:
 * 1. Method Overriding:
 *    - Child classes override parent class methods
 *    - Each class can have its own implementation
 *    - Can call parent class methods using super
 *    - Example: getArea(), getPerimeter(), draw()
 * 
 * 2. Method Overloading:
 *    - Using default parameters
 *    - Different implementations based on parameters
 *    - Example: distance() vs distanceFromOrigin()
 * 
 * 3. Polymorphism Benefits:
 *    - Code flexibility and reusability
 *    - Type checking with instanceof
 *    - Dynamic method dispatch
 *    - Single interface for different implementations
 */
class Shape {
    /**
     * Constructor for Shape
     * @param {string} color - Color of the shape
     */
    constructor(color) {
        this.color = color;
    }

    /**
     * Base method to calculate area
     * @returns {number} Area of the shape
     */
    getArea() {
        return 0;
    }

    /**
     * Base method to calculate perimeter
     * @returns {number} Perimeter of the shape
     */
    getPerimeter() {
        return 0;
    }

    /**
     * Base method to draw the shape
     */
    draw() {
        console.log(`Drawing a ${this.color} shape`);
    }
}

// Derived classes
/**
 * Represents a Circle shape
 */
class Circle extends Shape {
    /**
     * Constructor for Circle
     * @param {string} color - Color of the circle
     * @param {number} radius - Radius of the circle
     */
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    /**
     * Override getArea method for Circle
     * @returns {number} Area of the circle
     */
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    /**
     * Override getPerimeter method for Circle
     * @returns {number} Circumference of the circle
     */
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    /**
     * Override draw method for Circle
     */
    draw() {
        super.draw();
        console.log(`Drawing a circle with radius ${this.radius}`);
    }
}

/**
 * Represents a Rectangle shape
 */
class Rectangle extends Shape {
    /**
     * Constructor for Rectangle
     * @param {string} color - Color of the rectangle
     * @param {number} width - Width of the rectangle
     * @param {number} height - Height of the rectangle
     */
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    /**
     * Override getArea method for Rectangle
     * @returns {number} Area of the rectangle
     */
    getArea() {
        return this.width * this.height;
    }

    /**
     * Override getPerimeter method for Rectangle
     * @returns {number} Perimeter of the rectangle
     */
    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    /**
     * Override draw method for Rectangle
     */
    draw() {
        super.draw();
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }

    /**
     * Method to get diagonal length of rectangle
     * @returns {number} Diagonal length
     */
    getDiagonal() {
        return Math.sqrt(this.width * this.width + this.height * this.height);
    }
}

// Method Overloading using default parameters
/**
 * Represents a Point in 2D space
 */
class Point {
    /**
     * Constructor for Point
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Method to calculate distance from another point
     * @param {Point} point - Another point
     * @returns {number} Distance between points
     */
    distance(point) {
        if (point instanceof Point) {
            const dx = this.x - point.x;
            const dy = this.y - point.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
        return 0;
    }

    /**
     * Method to calculate distance from origin
     * @returns {number} Distance from origin
     */
    distanceFromOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

// Polymorphism example using array of shapes
function processShapes(shapes) {
    shapes.forEach(shape => {
        console.log(`\nProcessing ${shape.constructor.name}`);
        console.log(`Area: ${shape.getArea()}`);
        console.log(`Perimeter: ${shape.getPerimeter()}`);
        shape.draw();
        
        // Type checking and additional operations
        if (shape instanceof Rectangle) {
            console.log(`Diagonal: ${shape.getDiagonal()}`);
        }
    });
}

// Example usage:
const shapes = [
    new Circle('red', 5),
    new Rectangle('blue', 4, 6),
    new Shape('green')
];

// Polymorphism in action
processShapes(shapes);

// Method overloading example
const point1 = new Point(3, 4);
const point2 = new Point(6, 8);

console.log(`\nDistance between points: ${point1.distance(point2)}`);
console.log(`Distance from origin: ${point1.distanceFromOrigin()}`);