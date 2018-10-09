let table = [...Array(10)].map(e => Array(10));

const recursive = (y, x, maxY, maxX) => {
	if (y === maxY && x === maxX) {
		table[y][x] = (y + 1) * (x + 1);
		return;
	} else if (x === maxX) {
		table[y][x] = (y + 1) * (x + 1);
		recursive(y + 1, 0, 9, 9);
	} else if (y === maxY) {
		table[y][x] = (y + 1) * (x + 1);
		recursive(y, x + 1, 9, 9);
	} else {
		table[y][x] = (y + 1) * (x + 1);
		recursive(y, x + 1, 9, 9);
	}
};

recursive(0, 0, 9, 9);
console.log(table);
