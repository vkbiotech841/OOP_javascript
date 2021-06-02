// Inheritance: In OOPs, Inheritance enables an object or class to take on properties, methods of another object or class. This make a piece of code to re-used at multiple places.
// In this way; we can re-use the properties and methods into the another object or class.
// Inheritance is two types:
// (1) Protypical Inheritance: in Javascript
// (2) Classical Inheritance: in Typescript

// In javascript we do not have the any concept of class. Hence, Inheritance of Objects in javascript is called as prototypical Inheritance. whereas inheritance of class or objects in typescript is called as Classical Inheritance.

//  Let say, Parent Class/object has method that need to be inherited to child class A and Child class B. So, Parent class is called as "Base/Super/Parent" class/object. Whereas child class A and B are referred as "Derived/Sub/Child" class/object. This type of inheritance relationship is called as "IS-A" relationship.


///////////////////////////// Prototypical Inheritance: In javascript ////////////////////////////////////
// Consider shape is an parent object from circle object inheritance it properties. Hence, Parent object is called as "Prototype" of circle object.
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
// Hence, in javascript if we find a method in x object, javascript first look for that method in x object. if it can't find then it will look for its parent object/objectbase. This process is know as prototypica inheritance in javascript.

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


// PROTOTYPE DESCRIPTORS:
// If an object is derived from its objectbase. Then can we iterate over those methods?

let person = { name: 'vikram' };
let objectbase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectbase, 'toString');
console.log("descriptor", descriptor);

// In the console, you can find that every descriptor has properties like: 
// writable : can be over-write this method.
// enumerable : can we loopable
// configurable : if true, that means if you want to delete this properties, you can.

// Question: Can we change the descriptor for our custom object. that means we make properties of our custom not to be writtable.

// Answer: Yes

// Example: Here, we making name property of person2 to be not writtable from outside.

let person2 = { name: "kumar" };
Object.defineProperty(person2, 'name', {
    writable: false
});

// In the above line, we have set the descriptor of name property to be not writtable.

// Now, if you wish to changes the name in the person2 object from outside, then it won't work.

person2.name = 'ricky';

console.log("person2 name", person2.name);
console.log("person2 keys", Object.keys(person2));

// In the console you can check, eventhough, we assigning a new name to the person2 but it is not able to changes. this is because, we made the descriptor of name properties to be not writtable.

// Similarly,we can also change the enumerable properties.

let person3 = { name: "kumar" };
Object.defineProperty(person3, 'name', {
    writable: false,
    enumerable: false
});

console.log("person3 name", person3.name);
console.log("person3 keys", Object.keys(person3));

// similarily, we can also set the configurable properties.

let person4 = { name: "kumar" };
Object.defineProperty(person4, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

console.log("person4 name", person4.name);
console.log("person4 keys", Object.keys(person4));

// Here, we are trying to delete the name properties, after setting its configurable properties to false.
delete person4.name;

console.log("person4 after deleting name properties", person4);


///////////////////////////// Constructor Inheritance: In javascript ////////////////////////////////////





