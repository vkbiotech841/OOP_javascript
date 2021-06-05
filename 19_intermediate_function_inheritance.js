function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

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


Circle.prototype.draw = function () {
    console.log("draw");
}

extend(Circle, Shape);

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');
const sq = new Square(10);

console.log("shape", s);
console.log("circle", c);
console.log("sqare", sq);

// Here, extend function is working as intermediate function inheritance.