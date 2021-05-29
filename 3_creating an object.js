// CREATING AN OBJECT:
// Many a times we need to create an object at multiple place. How do we do that?
// Every object in javascript has property called as "Constructor". This references to the function that was used for creating or constructing that object.

// Solution 01:
// Type manually object using object literal syntex at the several places (not recommanded);
const circleOne = {
    radius: 1,
    locations: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log("draw");
    }
};

console.log("creating object using object literal", circleOne);

// Solution 02:
// To create multiple objects with the same structure and behaviuor (methods) use Factory functions and constructor function.

// Factory function:

// factory function must return an object.
function createCircle(radius) {
    return {
        radius: radius,
        locations: {
            x: 1,
            y: 1,
        },
        draw: function () {
            console.log("draw");
        }
    };
}

const circleTwo = createCircle(1);
console.log("creating object using factory function", circleTwo);


// Constructor function:

// Constructor function are name with capital letter.
// We use "this" keyword inside the constructor funtion instead of return.
// this is refernce to the object that refering to the object that executing this piece of code.
// Further, create an object, constructor function need to be instantiated with new keyword.

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
console.log("creating circle using constructor method", circleThree);


// Solution 03:
// Create a class and instantiate the class where you wish to create an object. Creating class are only possible in typescript not in javascript.

// In the above example, circleTwo and circleThree are objects have been created using their in-build constructor functions.
console.log("constructor for circleTwo", circleTwo.constructor);
console.log("constructor for circleThree", circleThree.constructor);