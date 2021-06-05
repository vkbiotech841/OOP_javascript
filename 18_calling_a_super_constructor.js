// Here, we want to Shape constructor should a color parameter.
function Shape(color) {
    this.color = color;

}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius, color) {
    // Here, we are calling a super constructor.
    Shape.call(this, color)
    this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log("draw");
}

const s = new Shape();
const c = new Circle(1, 'red');

console.log("s", s);
console.log("c", c);