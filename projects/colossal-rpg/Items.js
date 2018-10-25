const { Weapon, Armor, Accessory, KeyItem } = require('./Equipment');

const items = {
	weapons: [
		new Weapon('Fists', 0, 1, 4, 20000),
		new Weapon('Iron Sword', 10, 4, 8, 100),
		new Weapon('Wooden Staff', 5, 2, 5, 20)
	],
	armor: {
		chest: [
			new Armor('Shirts', 1, 'chest', 1, 10),
			new Armor('Iron Plate', 10, 'chest', 10, 100)
		],
		legs: [
			new Armor('Pants', 1, 'legs', 1, 10),
			new Armor('Iron Leggings', 10, 'legs', 10, 100)
		],
		boots: [
			new Armor('Shoes', 1, 'boots', 1, 10),
			new Armor('Iron Grieves', 10, 'legs', 10, 100)
		]
	},
	accessories: {
		rings: [
			new Accessory('Ring of Death', 1000, 'ring'),
			new Accessory('Ring of Life', 1000, 'ring')
		],
		amulets: [new Accessory('Chain of Corruption', 2000, 'amulet')]
	},
	items: {
		questItems: [
			new KeyItem('Holy Relic', 0, 'A surviving trophy from a past holy war.'),
			new KeyItem('Ancestors Relic', 0, 'Some things are better left unopened.')
		],
		keys: [new KeyItem('Skeleton Key', 0, 'This can open anything.')]
	}
};

module.exports = { items: items };
