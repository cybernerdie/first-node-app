// function sayHello(name){
//     console.log('Hello ' + name)
// }

// sayHello('Josh');
// var message = 'Hello Josh';

// console.log(message)
// console.log(module)

// const log = require('./log');
// log('Hello World');

// const path = require('path');
// var pathObject = path.parse(__filename);
// console.log(pathObject)

// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// const fs = require('fs');
// const files =  fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if(err) console.log('Error', err);
//     else console.log('Files', files)
// });


// const Logger = require('./logger');
// const logger = new Logger();
// var message = 'Hello World';

// // Register a listener
// logger.on('messageLogged', (args) => {
//     console.log('Listener called', args);
// });

// logger.log(message);

// const http = require('http');
// const server = http.createServer();

// const server = http.createServer((req, res) => {

//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }

//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3,4,5]));
//         res.end();
//     }

// });

// server.on('connection', (socket) => {
// console.log('New connection');
// });

// server.listen(3000);
// console.log('Listening on port 3000...');


