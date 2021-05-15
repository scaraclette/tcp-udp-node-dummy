const fs = require('fs');

// Async function
// if not asynchronous, will read whole file first then print 'here'
fs.readFile('stuff.txt', (err, data) => {
    console.log(data.toString());
});

console.log('here');