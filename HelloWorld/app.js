//Tell node that you're going to be needing the file. 
// var greeting = require("./greet.js");

// greeting();

var me = {
	name: "Nestor",
	lastname: "Zepeda",
	birthday: "November 7, 1993",
	greeting: function(){

		console.log("Hi my name is " + this.name + " " + this.lastname + " and my birthday is " + this.birthday);
	}
}

me.greeting();
console.log(me["birthday"]);