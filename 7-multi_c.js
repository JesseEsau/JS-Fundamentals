const { argv } = require('node:process');

let x = parseInt(argv[2])
let count = 0;
if (x) {
    while (count < x) {
        console.log('C is fun');
        count++;
    }
}
else {
    console.log("Missing number of occurrence")
}