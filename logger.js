const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {

        console.log(message)

        // Register an event
        var args = {
            id: 1,
            url: 'https://google.com'
        } 

        this.emit('messageLogged', args);
    }

}

module.exports = Logger;