const matchingWords = str => {
	let array = str.split(' ');
	let newArray = [];

	for (i = 0; i < array.length; i++) {
		if (
			array.indexOf(array[i]) !== array.lastIndexOf(array[i]) &&
			!newArray.includes(array[i])
		)
			newArray.push(array[i]);
	}

	return newArray;
};

console.log(
	matchingWords(
		'Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.'
	)
);
