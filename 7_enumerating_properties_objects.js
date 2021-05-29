
// Getting key of the object:

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

const circleFour = new Circle(1);

// Method 01: To enumerate all the members of an objects in loop
for (let key in circleFour) {
    if (typeof circleFour[key] !== 'function') {
        console.log(key, circleFour[key]);
    }
}

// Methods 02 : To get the all the keys of an objects in an array
const keys = Object.keys(circleFour);
console.log("object.key method gives keys in an array", keys);

// Method 03: To check the existance of a properties in a object
if ('radius' in circleFour) {
    console.log("radius is present");
}