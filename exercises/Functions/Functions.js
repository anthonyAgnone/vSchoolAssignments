const sum = (x, y) => {
	return x + y;
};

const largestNumber = (a, b, c) => {
	if (a > b && a > c) return a;
	else if (b > c) return b;
	return c;
};

const evenOdd = x => {
	return x % 2 == 0 ? 'even' : 'odd';
};

const weirdManip = str => {
	if (str.length <= 20) return str + str;
	return str.substring(0, str.length / 2);
};
