// Create an uninitialized buffer with 100 bytes length
// and fill it with bytes with values starting from 0 to 99.
// And then print its contents.
'use strict';

let buffer = new Buffer(100);

for(let i = 0; i < buffer.length; i++) {
    buffer[i] = i;
}

console.log(buffer);
