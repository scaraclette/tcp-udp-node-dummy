// Test event emitters
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/**
 * emit: used to trigger an event
 * on: used to add a callback function that's going to be executed when the event is triggered.
 */

eventEmitter.on('start', () => {
    console.log('started event 1!');
});

eventEmitter.emit('start');

// Passing arguments
const eventEmitter_2 = new EventEmitter();
eventEmitter_2.on('start_2', (start, end) => {
    console.log(`started ${start} to ${end}`);
});

eventEmitter_2.emit('start_2', 9, 100);

// buffers
const buf = Buffer.from('hey');
console.log('raw buffer:', buf);
console.log(buf.toString());

const another_buf = Buffer.alloc(1024);
console.log('another buf length:', another_buf.length);

