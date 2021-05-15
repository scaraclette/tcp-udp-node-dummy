// Hello synchronous programmers

// Readfile using async-await
const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

// Top level function
var run = async () => {
    // Promise version
    read('stuff.txt')
        .then(data => {
            console.log(data.toString());
        });

    // Async/await version
    // Waits until read is run
    const data = await read('stuff_2.txt');
    console.log(data.toString());
};

run();
console.log('dendot');

// Alternative
// async function () ....