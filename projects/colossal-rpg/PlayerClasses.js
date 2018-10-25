class Player {
	constructor(name, y = 1, x = 1, level = 1, xp = 0, nextLevel = 10, hp = 18) {
		this.name = name;
		this.y = y;
		this.x = x;
		this.level = level;
		this.xp = xp;
		this.nextLevel = nextLevel;
		this.hp = hp;
	}

	// Player Actions
	displayMap(map, y, x, hp) {
		let newMap = map;
		newMap[y][x] = 8;
		console.log(`
    *****************************************
    Player Hp: ${hp}  Player Stress: 0
    *****************************************

		Current Position: 

                  ${newMap[y - 1][x - 1]}     ${newMap[y - 1][x]}     ${newMap[y - 1][x + 1]}
    
                  ${newMap[y][x - 1]}     ${newMap[y][x]}     ${newMap[y][x + 1]}
    
                  ${newMap[y + 1][x - 1]}     ${newMap[y + 1][x]}     ${newMap[y + 1][x + 1]}
    
                  ***************
                      LEGEND
                  ***************
                  *   8: YOU    *
                  *   1: Wall   *
                  *   0: Path   *
                  *   2: Event  *
                  *   3: Exit   *
                  ***************
	`);
	}
	moveLeft(map) {
		if (map[this.y][this.x - 1] === 0 || map[this.y][this.x - 1] === 3) {
			map[this.y][this.x] = 0;
			console.log('\nYou move west.\n');
			this.x--;
		} else
			console.log(`
        *****************************************************
        You have found a wall. Can not move in this direction
        *****************************************************
      `);
	}
	moveRight(map) {
		if (
			map[this.y][this.x + 1] === 0 ||
			map[this.y][this.x + 1] === 2 ||
			map[this.y][this.x + 1] === 3
		) {
			map[this.y][this.x] = 0;
			console.log('\nYou move east.\n');
			this.x++;
		} else
			console.log(`
    *****************************************************
    You have found a wall. Can not move in this direction
    *****************************************************
  `);
	}
	moveUp(map) {
		if (map[this.y - 1][this.x] === 0 || map[this.y - 1][this.x] === 3) {
			map[this.y][this.x] = 0;
			console.log('\nYou move north.\n');
			this.y--;
		} else
			console.log(`
    *****************************************************
    You have found a wall. Can not move in this direction
    *****************************************************
  `);
	}
	moveDown(map) {
		if (map[this.y + 1][this.x] === 0 || map[this.y + 1][this.x] === 3) {
			map[this.y][this.x] = 0;
			console.log('\nYou move south.\n');
			this.y++;
		} else
			console.log(`
    *****************************************************
    You have found a wall. Can not move in this direction
    *****************************************************
  `);
	}
	checkStats() {
		console.log(`
			Name: ${this.name}
			Level: ${this.level}
			Class: ${this.class}
			Experience: ${this.xp}
			EXP to Level: ${this.nextLevel}
			HP: ${this.maxHp}
			Protection Modifier: ${this.protMod}
			Speed: ${this.speed}
			Dodge: ${this.dodge}
			Skills: ${this.skills}
  		`);
	}
	checkMap(map) {
		console.log(`
				TOWN MAP
			|----|----|____
			| TH | AB |    |
			|----|----|----|
			| AP | TS | SH |
			|----|____|----|
			|___DUNGEON____|

			8 = Current Position
			0 = Possible paths
		`);
		console.log(`
			${map[0]}
			${map[1]}
			${map[2]}
		`);
	}
}

class PlayerClass extends Player {
	constructor(name, maxHp, dodge, speed, protMod) {
		super();
		this.name = name;
		this.maxHp = maxHp;
		this.hp = this.maxHp;
		this.dodge = dodge;
		this.speed = speed;
		this.protMod = protMod;
		this.bleed = false;
		this.bleedDuration = 0;
		this.stun = false;
		this.buffDuration = 0;
	}
}

class Wanderer extends PlayerClass {
	constructor(name, y, x, level, xp, nextLevel) {
		super(name, 18, 6, 6, 1);
		this.name = name;
		this.class = 'Wanderer';
		this.skills = ['Punch', 'Duck'];
		this.skillFun = [this.punch, this.duck];
		this.skillType = ['damage', 'buff'];
	}

	punch(inventory, enemy) {
		let dmg = 0;
		let acc = 95;
		let crit = 4;
		let minDmg = inventory.weapon.minDmg;
		let maxDmg = inventory.weapon.maxDmg;
		let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
		let randomCrit = Math.random();
		let randomMiss = Math.random();

		if (acc - enemy.dodge < randomMiss * 100) dmg = 0;
		else dmg = random;

		if (crit > randomCrit * 100) dmg *= 2;

		if (this.stun) {
			console.log('You are stunned! You can not move!');
			this.stun = false;
		} else {
			return dmg;
		}
	}

	duck() {
		return {
			stat: 'dodge',
			amount: 20,
			duration: 2
		};
	}
}

class Crusader extends PlayerClass {
	constructor(name) {
		super(name, 33, 5, 1, 8);
		this.class = 'Crusader';
		this.class = 'Crusader';
		this.skills = ['Smite', 'Bulwark of Faith', 'Stunning Blow', 'Battle Heal'];
		this.skillFun = [this.smite, this.bulwarkOfFaith, this.stunningBlow, this.battleHeal];
		this.skillType = ['damage', 'buff', 'damage', 'heal'];
	}

	smite(inventory, enemy) {
		let dmg = 0;
		let acc = 85;
		let crit = 0;
		let minDmg = inventory.weapon.minDmg;
		let maxDmg = inventory.weapon.maxDmg;
		let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
		let randomCrit = Math.random();
		let randomMiss = Math.random();

		if (acc - enemy.dodge < randomMiss * 100) dmg = 0;
		else dmg = random;

		if (crit > randomCrit * 100) dmg *= 2;

		if (enemy.faction === 'unholy') dmg *= 1.15;

		return Math.floor(dmg + 1);
	}

	bulwarkOfFaith() {
		return {
			stat: 'protMod',
			amount: 20,
			duration: 2,
			target: 'player'
		};
	}

	stunningBlow(inventory, enemy) {
		let dmg = 0;
		let acc = 65;
		let crit = 0;
		let minDmg = inventory.weapon.minDmg;
		let maxDmg = inventory.weapon.maxDmg;
		let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
		let randomCrit = Math.random();
		let randomMiss = Math.random();

		if (acc - enemy.dodge < randomMiss * 100) dmg = 0;
		else {
			dmg = random + 1;
			enemy.stunned = true;
		}

		if (crit > randomCrit * 100) dmg *= 2;

		return Math.ceil(dmg);
	}

	battleHeal() {
		let heal = 4;
		return heal;
	}
}

class GraveRobber extends PlayerClass {
	constructor(name) {
		super(20, 10, 8, 0);
		this.class = 'GraveRobber';
		this.skills = ['', '', '', ''];
		this.skillsFun = [];
		this.skillType = [];
	}
}

class Arbalest extends PlayerClass {
	constructor(name) {
		super(27, 0, 3, 0);
		this.class = 'Arbalest';
		this.skills = ['', '', '', ''];
		this.skillsFun = [];
		this.skillType = [];
	}
}

class ShieldBreaker extends PlayerClass {
	constructor(name) {
		super(20, 8, 5, 0);
		this.class = 'Arbalest';
		this.skills = ['', '', '', ''];
		this.skillsFun = [];
		this.skillType = [];
	}
}

module.exports = {
	Player,
	Crusader,
	GraveRobber,
	Arbalest,
	ShieldBreaker,
	Wanderer
};
