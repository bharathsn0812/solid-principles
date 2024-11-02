
// Liskov Substitution Principle

// Bad
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const rectangle = new Rectangle(4, 5);
const square = new Square(5);

console.log(rectangle.area()); // 20
console.log(square.area());     // 25

// Good
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}

const newRectangle = new Rectangle(4, 5);
const newSquare = new Square(5);

console.log(newRectangle.area()); // 20
console.log(newSquare.area());     // 25
