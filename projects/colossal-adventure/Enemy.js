function Enemy(level = 1, hp = 12) {
	this.level = level;
}

function EnemyClass(maxHp, dodge, speed, protMod, skills) {
	this.maxHp = maxHp;
	this.hp = this.maxHp;
	this.dodge = dodge;
	this.speed = speed;
	this.protMod = protMod;
	this.skills = skills;
	this.stunned = false;
}

function Brigand(level, faction = 'human') {
	Enemy.call(this, level);
	EnemyClass.call(this, 12, 2, 2, 1, [
		'Slice and Dice',
		'Shank',
		'Uppercut Slice',
		'Harmless Poke'
	]);
	this.name = 'Brigand Cutthroat';
	this.faction = faction;
	this.skillFun = [this.slice, this.shank];
}
Brigand.prototype = Object.create(Enemy.prototype);
Brigand.prototype.constructor = Brigand;

Brigand.prototype.slice = function(player) {
	let dmg = 0;
	let acc = 72.5;
	let crit = 12;
	let minDmg = 1;
	let maxDmg = 4;
	let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
	let randomCrit = Math.random();
	let randomMiss = Math.random();

	if (acc - player.dodge < randomMiss * 100) dmg = 0;
	else dmg = random;

	if (crit > randomCrit * 100) dmg *= 1.6;

	return dmg;
};

Brigand.prototype.shank = function(player) {
	let dmg = 0;
	let acc = 68.5;
	let crit = 6;
	let minDmg = 2;
	let maxDmg = 6;
	let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
	let randomCrit = Math.random();
	let randomMiss = Math.random();
	let bleedDuration = 3;
	let bleedAmount = 2;

	if (acc - player.dodge < randomMiss * 100) dmg = 0;
	else dmg = random;

	if (crit > randomCrit * 100) dmg *= 1.6;

	return dmg;
};

function BoneSoldier(level, faction = 'unholy') {
	Enemy.call(this, level);
	EnemyClass.call(this, 10, 0, 2, 1, ['Grave Yard Slash', 'Grave Yard Stumble']);
	this.name = 'Bone Soldier';
	this.faction = faction;
	this.skillFun = [this.slash, this.stumble];
}
BoneSoldier.prototype = Object.create(Enemy.prototype);
BoneSoldier.prototype.constructor = Brigand;

BoneSoldier.prototype.slash = function(player) {
	let dmg = 0;
	let acc = 82.5;
	let crit = 6;
	let minDmg = 3;
	let maxDmg = 6;
	let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
	let randomCrit = Math.random();
	let randomMiss = Math.random();

	if (acc - player.dodge < randomMiss * 100) dmg = 0;
	else dmg = random;

	if (crit > randomCrit * 100) dmg *= 1.6;

	return dmg;
};

BoneSoldier.prototype.stumble = function(player) {
	if (this.stunned) {
		console.log('Stunned! Can not perform action this turn!');
		this.stunned = false;
		return;
	}
	let dmg = 0;
	let acc = 42.5;
	let crit = 6;
	let minDmg = 2;
	let maxDmg = 5;
	let random = Math.floor(Math.random() * (maxDmg - minDmg)) + minDmg;
	let randomCrit = Math.random();
	let randomMiss = Math.random();

	if (acc - player.dodge < randomMiss * 100) dmg = 0;
	else dmg = random;

	if (crit > randomCrit * 100) dmg *= 2;

	return dmg;
};

module.exports = {
	Brigand: Brigand,
	BoneSoldier: BoneSoldier
};

// BASIS FOR COMBAT
// let bs = new BoneSoldier(1);
// console.log('Player Hp: ' + player.hp);
// console.log('now attacked');
// console.log('Player Hp: ' + (player.hp -= bs.slash(player)));
// console.log(`Enemy used ${bs.skills[Math.round(Math.random())]}`);
