// const noDup = string => {
// 	let letterStore = new Array();
// 	let testArray = new Array();
// 	for (i = 0; i < string.length; i++) {
// 		let checkLetter = string.charAt[i];
// 		testArray.push(checkLetter);
// 		if (string.includes(checkLetter, i + 1)) {
// 			letterStore.push(checkLetter);
// 		}
// 	}
// 	return testArray;
// };

const daDups = string => {
	let letterStore = new Array();
	for (i = 0; i < string.length; i++) {
		let checkLetter = string.charAt(i);
		if (string.includes(checkLetter, i + 1)) {
			letterStore.push(checkLetter);
		}
	}
	return letterStore;
};

const noDups = string => {
	for (i = 0; i < string.length; i++) {
		let checkLetter = string.charAt(i);
		if (string.includes(checkLetter, i + 1)) {
			string.slice(i);
		}
	}
};

console.log(daDups('bookkeeper larry'));
console.log(noDups('bookkeeper larry'));
