
function Circle(radius) {
    // instances members
    this.radius = radius;

    this.move = function () {
        console.log("move");
    }
}

const c1 = new Circle(1);

// Prototype member
Circle.prototype.draw = function () {
    console.log("draw");
}

// Object.keys methods :  only returns: Instance members.
console.log("object.keys iterating only returns instance members", Object.keys(c1));

// Result: radius and move 

// For in loop : return all members (instances and prototypes members).

for (let key in c1) {
    console.log("for loop return all members", key)
}

// Sometimes instance is also know as own property. To check this use following:

console.log("radius is an instance:", c1.hasOwnProperty("radius"));
console.log("draw is an instance:", c1.hasOwnProperty("draw"));