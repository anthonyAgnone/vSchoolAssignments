let root = document.getElementById('root');
let playerH = document.getElementById('player');
let states = document.getElementById('states');

let map = [];

const player = {
  x: 3,
  y: 1,
  moveRight: function() {
    this.x = this.x + 1;
    map[this.y][this.x];
  }
};

playerH.innerHTML = `Player position is y: ${player.y} x: ${player.x}`;
states.innerHtml = `${map}`;

const displayMap = map => {
  let currentMap = document.createElement('div');
  currentMap.className = 'map';
  for (var i = 0; i < map.length; i++) {
    let row = document.createElement('div');
    for (var j = 0; j < map[i].length; j++) {
      let column = document.createElement('span');
      column.innerHTML = map[i][j];
      row.appendChild(column);
      if (map[i][j] === 0) {
        column.style.background = 'red';
      } else if (map[i][j] === 3) {
        column.style.background = 'green';
      }
    }
    currentMap.appendChild(row);
  }
  states.appendChild(currentMap);
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
};

let exitsLeft = 1;
const recursion = (y, x, height, width) => {
  displayMap(map);

  if (x === 0 || x === width - 1 || y === height - 1 || y === 0) {
    if (exitsLeft === 1) {
      map[y][x] = 3;
      exitsLeft--;
      return;
    }
  }
  let randomDirection = createRandomDirections();
  for (i = 0; i < randomDirection.length; i++) {
    switch (randomDirection[i]) {
      case 1:
        if (y - 2 < 0) continue;
        if (map[y - 2][x] === 1) {
          map[y - 2][x] = 0;
          map[y - 1][x] = 0;
          recursion(y - 2, x, height, width);
        }
        break;
      case 2:
        if (x + 2 > width - 1) continue;
        if (map[y][x + 2] === 1) {
          map[y][x + 2] = 0;
          map[y][x + 1] = 0;
          recursion(y, x + 2, height, width);
        }
        break;
      case 3:
        if (y + 2 > height - 1) continue;
        if (map[y + 2][x] === 1) {
          map[y + 2][x] = 0;
          map[y + 1][x] = 0;
          recursion(y + 2, x, height, width);
        }
        break;
      case 4:
        if (x - 2 < 0) continue;
        if (map[y][x - 2] === 1) {
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

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

createMap(8, 8);
