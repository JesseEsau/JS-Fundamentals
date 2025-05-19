const { argv } = require('node:process');


function factorial(num) {
    if (parseInt(num)) {
        // return factorial
        return num * factorial(num - 1);
    }
    else {
        return 1;
    }

}

console.log(factorial(argv[2]))