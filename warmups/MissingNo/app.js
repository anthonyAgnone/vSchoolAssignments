const missingNo = arr => {
	let newArr = arr.sort(function(a, b) {
		return a - b;
	});
	console.log(newArr);
	for (i = 0; i < arr.length; i++) {
		if (newArr[i + 1] !== newArr[i] + 1) {
			return newArr[i] + 1;
		}
	}
};
module.exports = { missingNo: missingNo };
