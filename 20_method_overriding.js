// Command intermediate function to extent or inheritance.(it takes two constructors. child and parent constructor);

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Shape constructor
function Shape() {
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

// Cirlce constructor
function Circle() {
}

// Prototypical inheritance of Circle from Shape parent.
// Resetting prototype.
extend(Circle, Shape);


Circle.prototype.duplicate = function () {
    console.log("duplicate circle");
}

const s = new Shape();
const c = new Circle();

// Since, circle constructor inherits properties from shape constructor. Hence, it can have duplicate() method.
c.duplicate();


//Note: Here, parent (Shape) and child (Circle) constructors has two different duplicate methods. but when we calling c.duplicate() on circle. it takes the duplicate method of Circle constructor. Whey?

// Answer: This is because in javascrip how prototypical inheritance works. When we look for a property in an object, first look inside the its object, if it does not find then it look for the its parent object.  Here, current object (Circle) has already has duplicate methods hence it takes it other it would have taken the parnet duplicate method.
