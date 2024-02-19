var events = require('events');


var eventEmitter = new events.EventEmitter();

var conneectHandler = function connected(){
    console.log("Connection succesfulll");

    eventEmitter.emit('Data_recevied');

}

eventEmitter.on('connection',conneectHandler)

eventEmitter.on('Data_recived',function(){
    console.log("Data_recived succesfully.");
});


eventEmitter.emit("connection");
console.log("Program Ended.");