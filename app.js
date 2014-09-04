$(document).ready(function() {
	//global variables
	var buzz = "buzz";
	var fizz = "fizz";
	var fizzbuzz = "fizzbuzz";
	//fizzbuzz function
	var fizzBuzzFunction = function() {
		var number = prompt('Please enter a number');
		var numberConverted = +number;
		//test to make sure valid number entered
		if (numberConverted == NaN || numberConverted%1 !== 0) {
			alert('Input has to be a whole number..reload page and try again.');
		//fizzbuzz calculations using input
		} else {
			for (var i = 1; i <= numberConverted; i++) {
				if (i%3 == 0 && i%5 == 0) {
					console.log(fizzbuzz);
					$('#fizzbuzz').append("<li>fizzbuzz</li>");
				} else if (i%3 == 0) {
					console.log(fizz);
					$('#fizzbuzz').append("<li>fizz</li>");	
				} else if (i%5 == 0) {
					console.log(buzz);
					$('#fizzbuzz').append("<li>buzz</li>");
				} else {
					console.log(i);
					$('#fizzbuzz').append("<li>" + i + "</li>");
				}
			}
		}
	};

	fizzBuzzFunction();
});