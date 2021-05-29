// Objects: is a collection of key:value pairs.


// Here, radius, locations and draw are members of a circle object.
const circle = {
    radius: 1,
    locations: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log("draw");
    }
};

// Properties of an object can be accessed using dot notation.
circle.draw();

