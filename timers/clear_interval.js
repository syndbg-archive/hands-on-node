'use strict';

const period = 1000;

let interval = setInterval(() => {
    console.log('tick');
}, period);


// never executes interval
clearInterval(interval);
