const fs = require('fs');

fs.readFile('stuff.txt', (err, data) => {
    fs.readFile(data.toString(), (err, data) => {
        console.log(data.toString());
    });
});

console.log('done reading');