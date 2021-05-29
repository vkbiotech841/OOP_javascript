// Abstraction: Hide the details and show the essentials.
// Abstraction is a process where we expose (public) only few properties or function. Rest of them are private. This is reduces the code complexicity and abstracted part of the code is exposed.

function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 1, y: 2 };

    this.computeOptimumLocation = function () {

    }
    this.draw = function draw() {
        this.computeOptimumLocation();
        console.log("draw");
    }
}

const circleFive = new Circle(1);
circle.draw();