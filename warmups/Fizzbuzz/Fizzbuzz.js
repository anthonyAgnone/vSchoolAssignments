function fizzBuzz() {
	var numArray = [];
	for (var i = 1; i <= 100; i++) {
		var isDivBy3 = i % 3 === 0;
		var isDivBy5 = i % 5 === 0;

		if (isDivBy3 && isDivBy5) numArray.push('fizzbuzz');
		else if (isDivBy5) numArray.push('buzz');
		else if (isDivBy3) numArray.push('fizz');
		else numArray.push(i);
	}
	return numArray;
}

function countFizzes(arr) {
	//create an obj
	var counter = {
		fizzbuzz: 0,
		fizz: 0,
		buzz: 0
	};
	//loop over array
	for (var i = 0; i < arr.length; i++) {
		var numberOrString = arr[i];

		if (counter.hasOwnProperty(arr[i])) {
			counter[numberOrString]++;
		}
	}

	//return obj
	return counter;
}

const fizzArray = fizzBuzz();

console.log(countFizzes(fizzArray));
