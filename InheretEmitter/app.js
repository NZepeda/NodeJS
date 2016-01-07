// var EventEmitter = require("events");
// var util = require("util");

// function Greetr() {
// 	this.greeting = "Hello World!";
// }

// //Anything created from the first argument, inherets
// //from the second method
// //i.e (Child, Parent)
// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data){
// 	console.log(this.greeting + ": " + data);
// 	this.emit("greet", data);
// }

// var myGreet = new Greetr();

// myGreet.on("greet", function(data){
// 	console.log("Someone greeted!: " + data);
// });

// myGreet.greet("Tony!");

var name = "Nestor Zepeda";
var newString = `Hi there ${name} `;

console.log(newString);