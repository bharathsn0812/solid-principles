
// Interface Segregation Principle

// Bad
class Bird {
    fly() {
        console.log("Flying");
    }
    swim() {
        console.log("Swimming");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
    swim() {
        console.log("Swimming");
    }
}

// Good
class FlyingBird {
    fly() {
        console.log("Flying");
    }
}

class SwimmingBird {
    swim() {
        console.log("Swimming");
    }
}

class Sparrow extends FlyingBird {}
class Penguin extends SwimmingBird {}
