
//This is a class. The function is a constructor so you can have
//multiple constructors for the same class...
function Person(firstname, lastname){

	this.firstname = firstname;
	this.lastname = lastname; 

}

//Here you add a greet function on the PROTOTYPE not the actual class
//
Person.prototype.greet = function(){

	console.log("Hello, " + this.firstname + " " + this.lastname);

};

Person.prototype.curse = function(){
	console.log("Fuck you man");
	console.log("Sincerely, " + this.firstname);
}

var nestor = new Person("Nestor", "Zepeda");

nestor.greet(); 

var Ale = new Person("Alejandra", "Gonzalez");

Ale.greet();

Ale.curse();