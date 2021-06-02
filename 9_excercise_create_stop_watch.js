// Question: Design a stopwatch. Where you can call; start(), stop(), reset() methods. Also we can set the duration from outside.

// Answer:


function Stopwatch() {

    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running) {
            throw new Error("Stopwatch has already started...");
        }

        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running) {
            throw new Error("Stopwatch is not started...");
        }

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;

    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }

    })
}

const sw = new Stopwatch();



console.log("start", sw.start());

setTimeout(() => {
    console.log("stop", sw.stop());
    console.log("stop", sw.duration);

    setTimeout(() => {
        console.log("reset", sw.reset());
        sw.duration = 0;
    }, 1 * 1000);

}, 3 * 1000);



