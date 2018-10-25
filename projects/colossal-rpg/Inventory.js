let { items } = require('./Items');

function Inventory() {
	this.gold = 0;
	this.weapon = items.weapons[0];
	this.chest = items.armor.chest[0];
	this.legs = items.armor.legs[0];
	this.boots = items.armor.boots[0];
	this.ringR = 'none';
	this.ringL = 'none';
	this.amulet = 'none';
	this.bag = [];
	this.totalArmor = this.chest.armorVal + this.legs.armorVal + this.boots.armorVal;
}

Inventory.prototype.addGold = function(newGold) {
	this.gold += newGold;
};

Inventory.prototype.additem = function(newItem) {
	this.bag.push(newItem);
};

Inventory.prototype.removeGold = function(lessGold) {
	this.gold -= lessGold;
};

Inventory.prototype.removeItem = function(i) {
	let itemToRemove = this.bag[i];
	this.bag[i] = this.bag[this.bag.length - 1];
	this.bag[this.bag.length - 1] = itemToRemove;
	this.bag.pop();
};

Inventory.prototype.check = function() {
	console.log(`
		Gold: ${this.gold}
		Weapon: ${this.weapon}
		Chest: ${this.chest}
		Legs: ${this.legs}
		Boots: ${this.boots}
		Right Hand Ring: ${this.ringR}
		Left Hand Ring: ${this.ringL}
		Amulet: ${this.amulet}
		Bag: ${this.bag}
	`);
};

Inventory.prototype.equip = function(equipment, slot) {
	if (equipment.slot !== slot) {
		console.log("That item doesn't go there!");
	} else {
		console.log(`Equiped ${equipment} as your ${slot}`);
	}
};

module.exports = {
	Inventory: Inventory
};
