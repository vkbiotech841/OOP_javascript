// Constructor Inheritance:
// Functions are objects. Similarly, constructor functions are also an object and object has a prototype. Hence, construtors also have a its prototype.

// Constructor function:

function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);

// Here, Circle constructor function has a prototype.

Circle.prototype

// Example: 01 : use chrome developer console.

let obj = {};
let objectBase = obj.__proto__

// Now, we know that obj is creaed by object constructor function using new Object() method.
// This Object has prototype property.

let objectbase_constructor = Object.prototype;

// Now, if you check the objectBase(parent for obj) and Object.prototype (constructor for obj) are the same.

console.log("if objectbase and object constructor are same?", objectBase === objectbase_constructor);

// Summary: Parent for an object is same as constructor of the object.

// Example: 02 : use chrome developer console.
let array = [];
let arraybase = array.__proto__;
let arraybase_constructor = Array.prototype;

console.log("checkout if arraybase and array constructor are same", arraybase == arraybase_constructor)

// Answer is true.


// Example: 03 : use chrome developer console. For custom constructor object.

let circleBase = circle.__proto__;
let circleBase_constructor = Circle.prototype;
console.log('is circleBase and circleBase_constructor are same?', circleBase == circleBase_constructor);

