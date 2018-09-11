function isCaps(letter) {
	return letter === letter.toUpperCase();
}

const antiCaps = inputString => {
	let newString = '';
	for (i = 0; i < inputString.length; i++) {
		if (isCaps(inputString[i])) {
			newString += inputString[i].toLowerCase() + inputString[i];
		} else {
			newString += inputString[i].toUpperCase() + '!';
		}
	}
	console.log(newString);
};

antiCaps('racEcAr');
