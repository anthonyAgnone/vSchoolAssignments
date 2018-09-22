let rs = require('readline-sync');
const {
	Player,
	Crusader,
	GraveRobber,
	Arbalest,
	ShieldBreaker,
	Wanderer
} = require('./PlayerClasses');
const { Brigand, BoneSoldier } = require('./Enemy.js');
const { lootTable } = require('./LootTable');
const { Inventory } = require('./Inventory');

let combat = (player, inventory, enemy, lootTable) => {
	let playerSkills = player.skills;
	let hasBeenBuffed = false;
	while (player.hp > 0 && enemy.hp > 0) {
		//Status Bar
		console.log(`
			${player.name}		${enemy.name}
			Player Hp: ${player.hp}	Enemy Hp: ${enemy.hp}
		`);

		//action set up
		defaultActions = ['Items', 'Check Stats', 'Run'];
		combatActions = [...playerSkills, ...defaultActions];
		combatOptions = rs.keyInSelect(combatActions, 'It is your turn to act. Choose wisely.');

		//Check for status effects
		buffCheck(hasBeenBuffed, player, prevStat);

		if (combatOptions === 0) {
			if (player.skillType[0] === 'damage') {
				damageCalc(0, player, enemy, inventory);
				enemyDamage(0, player, enemy, inventory);
			} else if (player.skillType[0] === 'buff') {
				buffDebuff(0, player, enemy, inventory);
				enemyDamage(0, player, enemy, inventory);
			} else if (player.skilLType[0] === 'heal') {
				enemyDamage(0, player, enemy, inventory);
			}
		} else if (combatOptions === 1) {
			if (player.skillType[1] === 'damage') {
				damageCalc(1, player, enemy, inventory);
				enemyDamage(1, player, enemy, inventory);
			} else if (player.skillType[1] === 'buff') {
				buffDebuff(1, player, enemy, inventory);
				buffCheck(hasBeenBuffed, player, prevStat);
				enemyDamage(1, player, enemy, inventory);
			} else if (player.skillType[1] === 'heal') {
				enemyDamage(1, player, enemy, inventory);
			}
		} else if (combatOptions === 2) {
			if (player.skillType[2] === 'damage') {
				damageCalc(2, player, enemy, inventory);
				enemyDamage(2, player, enemy, inventory);
			} else if (player.skillType[2] === 'buff') {
				buffDebuff(2, player, enemy, inventory);
				enemyDamage(2, player, enemy, inventory);
			} else if (player.skillType[2] === 'heal') {
				enemyDamage(2, player, enemy, inventory);
			}
		} else if (combatOptions === 3) {
			if (player.skillType[3] === 'damage') {
				damageCalc(3, player, enemy, inventory);
				enemyDamage(3, player, enemy, inventory);
			} else if (player.skillType[3] === 'buff') {
				buffDebuff(3, player, enemy, inventory);
				enemyDamage(3, player, enemy, inventory);
			} else if (player.skillType[3] === 'heal') {
				healCalc(3, player);
				enemyDamage(3, player, enemy, inventory);
			}
		}
	}
	if (player.hp > 0 && enemy.hp <= 0) {
		console.log('Room by room, hall by hall, we reclaim what is ours.');
		let newLoot = lootTable.gold;
		inventory.addGold(newLoot);
		player.xp += 10;
		if (player.xp >= player.nextLevel) {
			console.log(`
				*****************************
				Level Up! Your level is now ${player.level};
				*****************************
			`);
		}
	} else if (player.hp <= 0) {
		console.log('you died');
		gameOver = true;
	}
};

const damageCalc = (i, player, enemy, inventory) => {
	let playerDamage = player.skillFun[i](inventory, enemy);

	if (playerDamage <= 0) {
		console.log(`
      ${player.name} missed his attack!
    `);
	} else {
		console.log(`
      ${player.name} used ${player.skills[i]} on ${enemy.name}
      dealing ${playerDamage} damage.
    `);
		enemy.hp -= playerDamage;
	}
};

const enemyDamage = (i, player, enemy, inventory) => {
	if (enemy.stunned) {
		console.log(`${enemy.name} is stunned! Can not perform action this turn!`);
		enemy.stunned = false;
		return;
	}
	let randEnemySkill = Math.round(Math.random());
	let enemyDamage = enemy.skillFun[randEnemySkill](player);

	let enemyFinal = Math.round(enemyDamage - inventory.totalArmor * (player.protMod / 100));

	if (enemyFinal <= 0) {
		console.log(`
      ${enemy.name} missed their attack!
    `);
	} else {
		console.log(`
    ${enemy.name} used ${enemy.skills[randEnemySkill]} on ${player.name}
    dealing ${enemyFinal} damage.
  `);
		player.hp -= enemyFinal;
	}
};

const healCalc = (i, player) => {
	let healAmount = player.skillFun[i]();

	if (healAmount >= player.maxHp - player.hp) {
		console.log(`
      ${player.name} heals to full!
    `);
		player.hp = player.maxHp;
		return;
	} else {
		console.log(`
      ${player.name} heals by ${healAmount}!
    `);
		player.hp += healAmount;
		return;
	}
};

const prevStat = {
	stat: '',
	previous: 0,
	new: 0,
	duration: 0,
	target: ''
};

const resetPrevStat = () => {
	prevStat.stat = '';
	prevStat.previous = 0;
	prevStat.new = 0;
	prevStat.duration = 0;
	prevStat.target = '';
};

const buffDebuff = (i, player) => {
	let statEffected = player.skillFun[i]().stat;
	let affectAmount = player.skillFun[i]().amount;
	let effectDuration = player.skillFun[i]().duration;
	let effectTarget = player.skillFun[i]().target;
	prevStat.stat = statEffected;
	prevStat.previous = player[statEffected];
	prevStat.new = affectAmount;
	prevStat.duration = effectDuration;
	prevStat.target = effectTarget;

	if (prevStat.target === 'player') {
		player[prevStat.stat] = prevStat.new;
	}
};

const buffCheck = (hasBeenBuffed, player, prevStat) => {
	if (prevStat.duration > 0) {
		prevStat.duration--;
		hasBeenBuffed = true;
	} else if (prevStat.duration === 0 && hasBeenBuffed === true) {
		player[prevStat.stat] = prevStat.previous;
		hasBeenBuffed = false;
		resetPrevStat();
		console.log(prevStat);
		console.log(player.protMod);
	} else {
		hasBeenBuffed = false;
	}
};
// let name = 'Anthony';
// player = new Player(name);
// player = new Crusader(name);

// let enemy = new Brigand(1);

// let newInventory = new Inventory();

// combat(player, newInventory, enemy, lootTable);

module.exports = {
	combat: combat
};
