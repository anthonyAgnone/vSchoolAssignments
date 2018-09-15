let rs = require('readline-sync');

let map = [];

const player = {
	x: 3,
	y: 1,
	moveRight: function() {
		this.x = this.x + 1;
		map[this.y][this.x];
	}
};

const createMap = (height, width) => {
	for (i = 0; i < height; i++) {
		newRow = [];
		for (j = 0; j < width; j++) {
			newRow.push(1);
		}
		map.push(newRow);
	}
	let y = Math.floor(Math.random() * (height - 3)) + 1;
	let x = Math.floor(Math.random() * (width - 3)) + 1;
	player.x = x;
	player.y = y;
	map[y][x] = 0;

	recursion(y, x, height, width);
	// console.log(y, x, height, width);
};

let exitsLeft = 1;
let calls = 0;

const recursion = (y, x, height, width) => {
	calls++;
	if (x === 0 || x === width - 1 || y === height - 1 || y === 0) {
		if (exitsLeft === 1 && calls > 4) {
			map[y][x] = 3;
			exitsLeft--;
			return;
		}
	}
	let randomDirection = createRandomDirections();
	// let randDirs = [1, 2, 3, 4, 1, 2, 3, 4];
	for (i = 0; i < randomDirection.length; i++) {
		switch (randomDirection[i]) {
			case 1: // Up
				//　Whether 2 cells up is out or not
				if (y - 2 < 0) continue;
				if (map[y - 2][x] != 0) {
					map[y - 2][x] = 0;
					map[y - 1][x] = 0;
					recursion(y - 2, x, height, width);
				}
				break;
			case 2: // Right
				// Whether 2 cells to the right is out or not
				if (x + 2 > width - 1) continue;
				if (map[y][x + 2] != 0) {
					map[y][x + 2] = 0;
					map[y][x + 1] = 0;
					recursion(y, x + 2, height, width);
				}
				break;
			case 3: // Down
				// Whether 2 cells down is out or not
				if (y + 2 > height - 1) continue;
				if (map[y + 2][x] != 0) {
					map[y + 2][x] = 0;
					map[y + 1][x] = 0;
					recursion(y + 2, x, height, width);
				}
				break;
			case 4: // Left
				// Whether 2 cells to the left is out or not
				if (x - 2 < 0) continue;
				if (map[y][x - 2] != 0) {
					map[y][x - 2] = 0;
					map[y][x - 1] = 0;
					recursion(y, x - 2, height, width);
				}
				break;
		}
	}
};

const createRandomDirections = () => {
	let randomArray = [];
	for (i = 0; i < 4; i++) {
		randomArray.push(i + 1);
	}
	shuffle(randomArray);
	return randomArray;
};

function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

createMap(15, 15);
console.log(`Current Position: Y: ${player.y} X: ${player.x}`);
console.log(map);
console.log(calls);

// createMap(5, 5);

// console.log(map);
// player.moveRight();
// console.log(map);

// function moveRight(player) {
// 	if (player.x < map[0].length) {
// 		return coordX + 1;
// 	} else return coordX;
// }

// if((y === 0) || (y === 6) || (x === 6) || ( x === 0)){
// 	map[y][x] === 3;
// 	return
// }
// if(map[y-1][x] === 1){

// }
