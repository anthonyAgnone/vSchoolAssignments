function Equipment(name, value) {
	this.name = name;
	this.value = value;
}

function Weapon(name, value, minDmg, maxDmg, durability) {
	Equipment.call(this, name, value);
	this.slot = 'Weapon';
	this.minDmg = minDmg;
	this.maxDmg = maxDmg;
	this.durability = durability;
}

function Armor(name, value, slot, armor, durability) {
	Equipment.call(this, name, value);
	this.slot = slot;
	this.armorVal = armor;
	this.durability = durability;
}

function Accessory(name, value, slot) {
	Equipment.call(this, name, value);
	this.slot = slot;
}

function KeyItem(name, value, description) {
	Equipment.call(this, name, value);
	this.desription = description;
}

module.exports = { Weapon: Weapon, Armor: Armor, Accessory: Accessory, KeyItem: KeyItem };
