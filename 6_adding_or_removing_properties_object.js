// Objects are dynamic in natures.
// This means that property of an object can be added or deleted from the object.
// key:value can be added or removed from an object.

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

//  ADDING PROPERTIES OF AN OBJECT:
// Adding new properties to the Circle object using dot notation:
circleThree.area = { area: 200 };

// Adding new properties using bracket method:
circleThree['circumference'] = { circumference: 300 }


// DELETING PROPERTIES OF AN OBJECT:

// using dot notation
delete circleThree.locations;
delete circleThree.draw;

// using bracket notation
delete circleThree['radius'];

console.log("circleThrree", circleThree);