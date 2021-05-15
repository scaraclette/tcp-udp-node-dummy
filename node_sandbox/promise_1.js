const promise = 
    new Promise((resolve, reject) => {
        resolve('good');
        reject('bad');
    })
    .then(value => {
        // Function as argument to resolve with
        throw 'really bad';
        console.log(value);
        return 1;
    })
    .then(value => {
        // Function as argument to resolve with
        console.log(value);
        return 22;
    })
    .then(value => {
        // Function as argument to resolve with
        console.log(value);
        return 33;
    })
    .then(value => {
        // Function as argument to resolve with
        console.log(value);
    })
    .catch(err => {
        // Function as argument to reject with
        console.log(err);
    });

// Readfile promise
