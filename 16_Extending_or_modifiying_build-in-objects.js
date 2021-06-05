// Adding a method the Array:

// Adding a custom shuffle method to the Array prototype.

Array.prototype.shuffle = function () {
    console.log("shuffling");
}

// Now, we are able to use this method on any array.
const array = [];
array.shuffle();

// NOTE: DON'T DO TRY TO MODIFY THE build-in-objects function in javascript.