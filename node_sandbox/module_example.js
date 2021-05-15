module.exports = {
    name: 'dendot-library',

    reverse(str) {
        return str.split('').reverse().join('');
    }
};

// Alt 1
// module.exports.name = 'dendot-2';
// module.exports.reverse = str => str.split('').reverse().join('');

// Alt 2
// exports.name = 'dendot-3';
// module.reverse = str => str.split('').reverse().join('');