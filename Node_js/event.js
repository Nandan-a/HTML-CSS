var events = require('events');
var eventEmitter = new events.EventEmitter();



eventEmitter.on("yell",handler);

eventEmitter.emit("yell");