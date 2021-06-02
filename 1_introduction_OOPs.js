// Style of Programming:
// (1) Procedural programming 
// (2) Object oriented programming

// Procedural Programming:
//  This sytle of programming consists of variables and functions.
// So there will many functions all over the code. This is style of coding is known as "Spagetty Code" 
// example

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

const result = function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
};

console.log("getWage");





// OOPs: Object Oriented Programming
// OOPs groups the related variable and function in an object (Encapsulation). That reduce the changes of code interdependency associated problems.

// OOPs is a paradigm(sytle of programming) centered around objects rather than functions.
// This is not a programming language but it is a sytle of programming.
// Languages that supports OOPs: C#, java, Ruby,  Python,  JavaScript
// Many framworks are designed based on OOPs. e.g. Angular
// example: localstorage is an object. that contains properties like length and methods like setItems() and getItems().

// example:

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

employee.getWage();

// In this case, getWage function has no parameter where as in procedural programming it has multiple parameters.

// Note: The best functions are those with no parameters. --- Uncle Bob


//  Four core concept of OOPs:
// 1. Encapsulation : process of grouping related variable and functions in a object.
// 2. Abstraction : is a process where we expose (public) only few properties or function. Rest of them are private. This is reduces the code complexicity and abstracted part of the code is exposed.
// 3. Inheritance : Inheritance enables an object or class to take on properties, methods of another object or class. It is a machanism that allows to reduce the redundant code.
// 4. Polymorphism : is a techniques reduces the more long codes like if and else or switch case statements.


