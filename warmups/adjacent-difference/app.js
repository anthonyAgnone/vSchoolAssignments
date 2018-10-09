const adjacentDifference = arr => {
	let testValue = arr[0].length + arr[1].length + arr[2].length;
	let array = [];
	let checkValue = 0;
	for (i = 1; i < arr.length - 1; i++) {
		checkValue = arr[i - 1].length + arr[i].length + arr[i + 1].length;
		if (checkValue > testValue) {
			testValue = checkValue;
			array = [arr[i - 1], arr[i], arr[i + 1]];
		}
	}
	return array;
};

module.exports = adjacentDifference;
