//pass by value

// function change(b){

// 	b = 2; 
// }

// var a = 1; 
// change(a); 
// console.log(a);

// //pass by reference

// function changeObj(d){
// 	d.prop1 = function(){}; //function
// 	d.prop2 = {}; 			//object
// }

// var c = {}; //empty object
// c.prop1 = {};
// changeObj(c);

// console.log(c);

/* Immediately invocked function expression */

(function(){
	console.log("Hi");
}());