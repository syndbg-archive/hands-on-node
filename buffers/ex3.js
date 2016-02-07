// Do what is asked on exercise 1
// and then copy bytes ranging 40 to 60
// into a new buffer. And then print it.
'use strict';

let buffer = new Buffer(100);

for(let i = 0; i < buffer.length; i++) {
    buffer[i] = i;
}

console.log(buffer);


let buffer2 = new Buffer(20);
buffer.copy(buffer2, 0, 40, 60);

console.log(buffer2);
