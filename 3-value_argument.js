const { argv } = require('node:process');

// The two commands used to run the script don't count
if (argv.length == 2) {
    console.log("No argument")
}
else {
    console.log(argv[2])
}