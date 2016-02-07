// Ex1:
// Build a pseudo-class named “Ticker”
// that emits a “tick” event every 1 second.
// Ex2:
// Build a script that instantiates one Ticker
// and bind to the “tick” event,
// printing “TICK” every time it gets one.

'use strict';

const util = require('util');
const EventEmitter = require('events').EventEmitter;

class Ticker extends EventEmitter {
    constructor() {
        super();

        this.count = 0;
        setInterval(() => {
            this.emit('tick', this.count++);
        }, 1000);
    }
};

let ticker = new Ticker();

ticker.on('tick', (count) => { console.log('tick', count); });
