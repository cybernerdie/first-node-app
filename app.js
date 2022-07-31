// function sayHello(name){
//     console.log('Hello ' + name)
// }

// sayHello('Josh');
// var message = 'Hello Josh';

// console.log(message)
// console.log(module)

// const log = require('./logger');
// log('Hello World');

// const path = require('path');
// var pathObject = path.parse(__filename);
// console.log(pathObject)

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

const fs = require('fs');
// const files =  fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Files', files)
});