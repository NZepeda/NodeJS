

'use strict'; // use this for production

class Person{

	constructor (firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
			console.log(`Hello ${this.firstname} ${this.lastname}`);
	}
	
}

var nestor = new Person("Nestor", "Zepeda");

nestor.greet();