'use strict';

const timeout = 1000;

// A will never be called
// due to B clearing it
// before it executes
let timeoutA = setTimeout(() => {
    console.log('timeout A');
}, timeout * 2);

// will be called once
let timeoutB = setTimeout(() => {
    console.log('timeout B');

    clearTimeout(timeoutA);
}, timeout);
