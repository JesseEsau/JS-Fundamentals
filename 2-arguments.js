const { argv } = require('node:process');

// The first two commands used to run the script don't count
if (argv.length === 2) {
    console.log("No argument");
}
else if (argv.length == 3) {
    console.log("Argument found");
}
else {
    console.log("Arguments found");
}