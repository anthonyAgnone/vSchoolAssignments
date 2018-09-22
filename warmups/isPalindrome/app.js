function isPalindrome(str) {
	let stoppingLength = str.length;
	for (let i = 0, j = str.length - 1; i < Math.floor(stoppingLength / 2); ) {
		while (/[^a-z]/i.test(str[i])) {
			stoppingLength--;
			i++;
		}
		while (/[^a-z]/i.test(str[j])) {
			stoppingLength--;
			j--;
		}
		if (str[i].toLowerCase() !== str[j].toLowerCase()) return false;
		i++;
		j--;
	}
	return true;
}

module.exports = { isPalindrome: isPalindrome };
