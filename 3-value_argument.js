const { argv } = require('node:process');

// The two commands used to run the script don't count
if (argv[2]) {
    console.log(argv[2]);
}
else {
    console.log("No argument");
}