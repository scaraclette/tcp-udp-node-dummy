const fs = require('fs');
const util = require('util');

// Old 
// fs.readFile('data1.txt', (err, data) => {
//     console.log(data.toString());
// })

// new
new Promise
    ((resolve, reject) => {
        // Read file in promise
        fs.readFile('stuff.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
    .then(data => {
        console.log(data.toString());
    })
    .catch(err => {
        console.log(err);
    });

// console.log('Hello');

// Using promisify module
var dendot = util.promisify(fs.readFile);
dendot('stuff_2.txt')
    .then(data=> {
        console.log(data.toString());
    });

// Callback hell
fs.readFile('stuff.txt', (err, data1) => {
    fs.readFile('stuff_2.txt', (err, data2) => {
        fs.readFile('stuff_3.txt', (err, data3) => {
            console.log(data1.toString());
            console.log(data2.toString());
            console.log(data3.toString());
        });
    });
});

// Enter promise
var read_all = util.promisify(fs.readFile);

Promise
    .all([
        read('stuff.txt'),
        read('stuff_2.txt'),
        read('stuff_3.txt')
    ])
    .then(data => {
        const [data1, data2, data3] = data;
        // console log
    })