// Abstraction: Hide the details and show the essentials.
// Abstraction is a process where we expose (public) only few properties or function. Rest of them are private. This is reduces the code complexicity and abstracted part of the code is exposed.

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };
    let computeOptimumLocation = function () {

    }
    this.draw = function draw() {
        let x, y;
        computeOptimumLocation();
        console.log("draw");
    }
}

const circleFive = new Circle(1);
circle.draw();

// In the above example, we don't want to expose defaultLocation and computeOptimumLocation to be excessable outside of this Circle function (Abstraction).
// To achieve this:
// We should use remove "this" keyword to avoid because its excess globally.
// We use let keyword to bring its scope to the nearest code block.
// Hence, this methods becomes private the Circle constructor function and can't be excessed outside of the function using dot notation.

// Now, what if you wish to use the local variable or private function to be excessed outside of the function with these kind of abstraction?

// Answers:

// Method 01
// Create a another function which should return a the function which you wish to be excessed from outside.Then use the dot notation to acess the function.
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };
    let computeOptimumLocation = function () {

    }

    this.getDefaultLocation = function () {
        return defaultLocation;
    }



    this.draw = function draw() {
        let x, y;
        computeOptimumLocation();
        console.log("draw");
    }
}

const circleFive = new Circle(1);
circle.draw();
circle.getDefaultLocation();


// Method 02:
// using in build getter and setter method.
// Object.prototype

// get : getter is a function that used for only reading a properties (readonly property).
// when circle.defaultLocation() function will be called. it will call the getter function and return its value. but using only we can read its value but can not set its value from outside. Hence, we need a another function to set its value from outside.Getter only make a function callable but not settable.

// set: setter is a function that is used for setting a value of a properties from outside.
// setter take a value.


function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };
    let computeOptimumLocation = function () {

    }
    this.draw = function draw() {
        let x, y;
        computeOptimumLocation();
        console.log("draw");
    }

    Object.prototype(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },

        set: function (value) {
            return defaultLocation = value;
        }
    })
}

const circleFive = new Circle(1);
circle.draw();
circle.defaultLocation();

