///////////////////////////// Prototypical Inheritance: In javascript ////////////////////////////////////

// Consider shape is an parent object from which circle object inheritance it properties. Hence, Parent object is called as "Prototype" of circle object.
// Parent prototype is also called as "objectBase". All its children inherites its properties from its objectbase.
// Objectbase does not have any parent. hence, there is no prototype for objectbase or parent object.
// we have single instance of objectbase in the memory.

// Try this, in the chrome dev console.
let x = {};
x;
// or 
console.log("prototype", Object.getPrototypeOf(x));


// If you check then you will find it every object has a same objectbase (__proto__).
// since, __proto__ is a depricated property. Hence, we write __ before and after prototype name.
// Hence, in javascript if we find a method in x object, javascript first look for that method in x object. if it can't find then it will look for its parent object/objectbase. This process is know as prototypical inheritance in javascript.

// MULTI-LEVEL INHERITANCE:

// Example 01: Prototypical inheritance of built-in objects or array.

// try this inside a chrome dev console.
let myArray = [];
myArray

// Here, you will find the array for array manupulation is inside the prototype of myArray. That means, it inherite there properties somewhere from arrayBase, which will be the same for all the array. Again, if you can find proto for an object. That means, in javascript memory:

// myArray drives from => arrayBase derivs from => objectBase.

// Example 02: Prototypical inheritance of custum object or an array.

// try this inside a chrome dev console.
// constructor method.
function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log("draw");
    }
}

const circle = new Circle(1);
// Here, we have created a custome object.

// Circle constructor derives from  => circlebase derives from => objectbase

