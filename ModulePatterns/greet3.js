function Greeter(){
	this.greeting = "Hello from greet3";
	this.greet = function(){
		console.log(this.greeting);
	}
}

module.exports = new Greeter();