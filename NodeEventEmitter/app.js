var Emitter = require('events');
var eventConfig = require("./config").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
	console.log("Not quite sure what is going on");
});

emtr.on(eventConfig.GREET, function(){
	console.log("A greeting occured.");
});

console.log("Hi!");

emtr.emit(eventConfig.GREET);