var event = require('events');
var emitter = new event.EventEmitter();

var myEventHandler = function () {
    console.log('I hear an event!');
}

emitter.on('speak', myEventHandler);
emitter.emit('speak');
