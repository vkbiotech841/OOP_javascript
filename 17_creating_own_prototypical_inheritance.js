// Question: Here, there are two constructor methods, Circle and Square. In Circle constructor, already we have added draw and duplicate method. we don't want to add this method to the Square constructor in the same way. What should be the solution for this?

// Answer: We can create a common Constructor methods, from where Circle and Square can inherite those methods. 

// Try this on chrom dev console

function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}

// Here, we are creating a new object using shape prototype and storing to the Circle prototype. Prototypical inheritance.
Circle.prototype = Object.create(Shape.prototype);

// resetting constructor:
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log("draw");
}


const s = new Shape();
const c = new Circle(1);

console.log("s", s);
console.log("c", c);

// You can see, that duplicate method has been added to the Circle prototype. Here, Circle inherite duplicate method from Shape constructor. Since, is called as Prototypical Inheritance.

