
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

// Example: Here, we are making name property of person2 to be not writtable from outside.

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