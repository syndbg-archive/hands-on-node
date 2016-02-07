// Do what is asked on the previous exercise
// and then slice the buffer with bytes ranging 40 to 60.
// And then print it.
'use strict';

let buffer = new Buffer(100);

for(let i = 0; i < buffer.length; i++) {
    buffer[i] = i;
}

console.log(buffer);

let buffer2 = buffer.slice(40, 60);

console.log(buffer2);
