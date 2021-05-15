const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async() => {
    const [d1, d2, d3] =
        await Promise
            .all([
                read('stuff.txt'),
                read('stuff_2.txt'),
                read('stuff_3.txt')
            ]);

    // Try catch
    try {
        const data = await read('no_txt.tx');
        console.log(data.toString());
    } catch(e) {
        console.log('DNE');
    }
        
    console.log(d1.toString());
    console.log(d2);
    console.log(d3);
}

run();

// When to use, when we want to wait before doing something to the function