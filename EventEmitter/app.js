var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", function(){
	console.log("Not quite sure what is going on");
});

emtr.on("greet", function(){
	console.log("A greeting occured.");
});

console.log("Hi!");

emtr.emit("no");