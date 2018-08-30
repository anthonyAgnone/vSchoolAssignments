//Preliminaries

if (5 > 3) {
	console.log(true);
}

var cat = 'cat';
if (cat.length === 3) {
	console.log(true);
}

var dog = 'dog';

if (cat === dog) {
	console.log('The same');
} else {
	console.log('not the same');
}

//Bronze Medal

//1
var person = {
	name: 'Bobby',
	age: 12
};
if (person.age >= 18) {
	console.log(person.name + ' is allowed to go to the movie');
} else {
	console.log(person.name + ' is not allowed to go to the movie');
}

//2
if (person.name.startsWith('B')) {
	console.log(person.name + ' is allowed to go to the movie');
} else {
	console.log(person.name + ' is not allowed to go to the movie');
}
//3
if (person.name.startsWith('B') && person.age >= 18) {
	console.log(person.name + ' is allowed to go to the movie');
} else {
	console.log(person.name + ' is not allowed to go to the movie');
}

//Silver Medal

//1

var num = 1;
var string = '1';
if (num === string) {
	console.log('strict');
} else if (num == string) {
	console.log('loose');
} else {
	console.log('not equal at all');
}

//2
if (1 <= 2 && 2 === 4) {
	console.log('yes');
}

//3
if ((1 <= 2 && 2 === 4) || (3 * 4 > 10 && 5 + 10 > 10)) {
	console.log('yes');
}

//Gold Medal

//1
if (typeof dog === 'string') {
	console.log('dog is string');
}

if (typeof 'true' === 'boolean') {
	console.log('true is a boolean');
}

//2
if (dog != undefined) {
	console.log('dog is defined');
} else {
	console.log('dog is not defined');
}

//3
const checkValues = (letter, number) => {
	let newLetter = letter.charCodeAt(0);
	if (newLetter > number) {
		console.log('letter ' + letter + ' is greater than ' + number + '.');
	} else {
		console.log('letter ' + letter + ' is not greater than ' + number + '.');
	}
};

checkValues('t', 19);

//4

const checkIfEven = letter =>
	console.log(letter.charCodeAt(0) % 2 === 0 ? letter + ' is even' : letter + ' is odd');

checkIfEven('s');
