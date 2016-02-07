'use strict';

const timeout = 1000;
let timeoutHandle = setTimeout(() => {
    console.log('boom');
}, timeout);

// And it won't be called.
clearTimeout(timeoutHandle);
