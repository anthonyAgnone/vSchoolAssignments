var officeItems = [
	'stapler',
	'monitor',
	'computer',
	'desk',
	'lamp',
	'computer',
	'lamp',
	'stapler',
	'computer',
	'computer'
];

for (let i = 0; i < officeItems.length; i++) {
	let count = 0;
	count++;
}

var maxFury = [
	{
		name: 'Mike',
		age: 12,
		gender: 'male'
	},
	{
		name: 'Madeline',
		age: 80,
		gender: 'female'
	},
	{
		name: 'Cheryl',
		age: 22,
		gender: 'female'
	},
	{
		name: 'Sam',
		age: 30,
		gender: 'male'
	},
	{
		name: 'Suzy',
		age: 4,
		gender: 'female'
	}
];

let oldEnough = 'old enough to see Mad Max';

for (let i = 0; i < maxFury.length; i++) {
	if (maxFury[i].age < 18) {
		maxFury[i].gender === 'male'
			? console.log(`${maxFury[i].name} is ${maxFury[i].age} and he is not ${oldEnough}`)
			: console.log(`${maxFury[i].name} is ${maxFury[i].age} and she is not ${oldEnough}`);
	} else {
		maxFury[i].gender === 'male'
			? console.log(`${maxFury[i].name} is ${maxFury[i].age} and he is ${oldEnough}`)
			: console.log(`${maxFury[i].name} is ${maxFury[i].age} and she is ${oldEnough}`);
	}
}

const toggleLight = lightToggle => {
	let sum = lightToggle.reduce((acc, val) => {
		return acc + val;
	});

	let isLightOn = sum % 2 === 0 ? false : true;

	console.log(isLightOn ? 'The light is on' : 'The light is off');
};

toggleLight([1, 2, 3, 4]);
