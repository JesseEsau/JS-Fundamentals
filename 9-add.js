const { argv } = require('node:process');

function add(a, b) {
    let sum = parseInt(a) + parseInt(b)
    return sum
}

console.log(add(argv[2], argv[3]))