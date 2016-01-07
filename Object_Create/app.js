var person = {
	firstname: " ",
	lastname: " ", 
	greet: function(){
		console.log(this.firstname + " " + this.lastname);
	}
}

var nestor = Object.create(person);
nestor.firstname = "Nestor";
nestor.lastname = "Zepeda";

var ale = Object.create(person);
ale.firstname = "Alejandra";
ale.lastname = "Gonzales";

nestor.greet();
ale.greet();
