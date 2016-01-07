"use strict";
var Greetr = require("./greetr");

var greet1 = new Greetr();

greet1.on("greet", function(){
	console.log("Someone greeted!");
})

greet1.greet('Nestor');