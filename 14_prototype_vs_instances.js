function Circle(radius) {
    // instances members
    this.radius = radius;

    this.move = function () {
        console.log("move");
    }
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log("c1", c1);
console.log("c2", c2);

// Here, we are creating two objects (c1 and c2) from Circle constructor function.
// Console.log tells that in the memory, we have 2 copies of the object. This consumes a lot of memories. 
// How do we minimize these memory leaks?

// Answer: 

// Add the common functions or properties to the constructor prototype. Here, we are adding draw method to the Circle constructor function to its prototype. Hence, this is available to all the objects those are created by this constructor. 

Circle.prototype.draw = function () {
    console.log("draw");
}

// Now, becasue of prototypical inheritance, draw method is accessable for all its objects.

c1.draw();
c2.draw();

// Here, what is hapenning? 
// here, javascript first looks for draw methods in to the Circle constructor function (here, we have only radius property). if it does not finds then it look into its parent or constructor prototype (Here, we have draw method). This is methods is called as prototypical inheritance.

// Hence, essentially we have two kinds of methods or properties in javascript:
// (1) Instance members
// (2) Prototype members

// Here, radius is a instance members and draw is prototype member

// Overwriting methods or properties:
// Prototype members
Circle.prototype.toString = function () {
    return "Circle with radius" + this.radius;
}

console.log("c1 toString", c1.toString());


// Referencing function in instance members or prototype members can be possible.

// For example. we can write a function as an instance member and call that function in the prototype or vice-versa. 