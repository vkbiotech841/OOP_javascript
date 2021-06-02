
// Function are first class citizens.
// Functions are objects.

function Circle(radius) {
    this.radius = radius;
    this.locations = {
        x: 1,
        y: 1,
    };
    this.draw = function draw() {
        console.log("draw");
    }
}

const circleThree = new Circle(1);

// To find the functions are an object, use dot notation, you can observe that all methods and properties of the functions looks like very similar to an object.

console.log("excessing name", Circle.name);
console.log("excessing length", Circle.length);
console.log("excessing methods", Circle.call({}, 1));

