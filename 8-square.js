const { argv } = require('node:process');

let size = parseInt(argv[2]);

if (size) {
    for (i = 0; i < size; i++) {
        let x = 'X'.repeat(size);
        console.log(x)
    }
}
else {
    console.log("Missing size")
}