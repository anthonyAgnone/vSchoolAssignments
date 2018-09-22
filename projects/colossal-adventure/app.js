let rs = require('readline-sync');
let opn = require('opn');
let { createMap } = require('./CreateMap');
const {
	Player,
	Crusader,
	GraveRobber,
	Arbalest,
	ShieldBreaker,
	Wanderer
} = require('./PlayerClasses');
const { cinematic } = require('./Cinematic');
const { ascii } = require('./Ascii');
const { combat } = require('./Combat');
const { Brigand, BoneSoldier } = require('./Enemy.js');
const { lootTable } = require('./LootTable');
const { Inventory } = require('./Inventory');
let gameOver = false;

// Player Setup
let name;
const classes = ['Crusader', 'Grave Robber', 'Arbalest', 'Shield Breaker'];

// Inventory Setup
let playerInventory = new Inventory();

//NPC Set up
const npcTalk = (person, line) => {
	return `
    ${person}:

        '${line}'
  `;
};

// Town and Map setup

// In town actions
townActions = [
	'Visit Town Hall',
	'Visit Apothecary',
	'Visit Shop',
	'Visit Abbey',
	'Explore Dungeon',
	'Check Stats',
	'Check Map'
];

dungeonActions = [
	'Explore Room',
	'Move North',
	'Move East',
	'Move South',
	'Move West',
	'Check Stats',
	'Check Inventory',
	'Surrender'
];

const townMap = [[0, 0, 1], [0, 8, 0], [1, 0, 1]];

const roadMap = [[1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 2, 0, 3, 1], [1, 1, 1, 1, 1, 1, 1]];

const dungeonMap = [];

// location booleans
let onRoad = false;
let inTown = false;
let inDungeon = false;

/*
Start of the adventure. Enjoy.
*/
let firstVisit = true;
while (!gameOver) {
	if (firstVisit) {
		name = rs.question('And what is your name traveler: ');
		player = new Player(name);
		player = new Wanderer(
			name,
			player.y,
			player.x,
			player.level,
			player.xp,
			player.nextLevel
		);
		console.log(cinematic[0]);
		opn('https://youtu.be/QlRBzoKN4NY?t=10s');

		let skipOption = rs.keyInYN('Do you want to skip the cut scene?');
		if (skipOption) {
			onRoad = true;
		}
	}

	while (onRoad) {
		if (firstVisit) {
			console.log(cinematic[1]);
			opn('https://youtu.be/LvxcWbPQlXE?t=9s');
			let nextSkip = rs.keyInYN('Do you want to skip the cut scene?');
			if (nextSkip) {
				player.y = 1;
				player.x = 1;
				firstVisit = false;
			}

			console.log(
				npcTalk(
					'Narrator',
					'Brigands have the run of these lanes. Keep to the side path; the Hamlet is just ahead.'
				)
			);
		}

		if (
			roadMap[player.y][player.x] === 0 ||
			(roadMap[player.y][player.x] === 8 && gameOver === false)
		) {
			player.displayMap(roadMap, player.y, player.x, player.hp);
			roadOptions = rs.keyInSelect(
				dungeonActions,
				'The road stretches before you into almost certain death. Do you proceed? '
			);
			if (roadOptions === 0) {
				console.log(
					'You look around in all four directions. It is too dark to see. Good luck'
				);
			} else if (roadOptions === 1) {
				player.moveUp(roadMap);
			} else if (roadOptions === 2) {
				player.moveRight(roadMap);
			} else if (roadOptions === 3) {
				player.moveDown(roadMap);
			} else if (roadOptions === 4) {
				player.moveLeft(roadMap);
			} else if (roadOptions === 5) {
				player.checkStats();
			} else if (roadOptions === 6) {
				playerInventory.check();
			} else if (roadOptions === 7) {
				gameOver = true;
				break;
			}
		} else if (roadMap[player.y][player.x] === 2) {
			console.log(
				npcTalk(
					'Narrator',
					'Dispatch this thug in brutal fashion, that all may hear of your arrival!'
				)
			);
			let enemy = new Brigand(1);
			combat(player, playerInventory, enemy, lootTable);
			roadMap[player.y][player.x] = 0;
		} else if (roadMap[player.y][player.x] === 4) {
			console.log('event room');
		} else if (roadMap[player.y][player.x] === 3) {
			player.displayMap(roadMap, player.y, player.x, player.hp);
			leaveActions = ['Stay', 'Check Inventory', 'Check Stats', 'Leave'];
			leaveOptions = rs.keyInSelect(
				leaveActions,
				'You found the exit! Do you want to leave?'
			);
			if (leaveOptions === 3) {
				onRoad = false;
				inTown = true;
				player.y = 1;
				player.x = 1;
				townMap[player.y][player.x] = 8;
			}
		}
	}

	while (inTown && townMap[1][1] === 8) {
		console.log(ascii[0]);
		if (player.class === 'Wanderer') {
			npcTalk(
				'Narrator',
				'Welcome home, such as it is.This squalid hamlet, these corrupted lands, they are yours now, and you are bound to them.'
			);
			townOptions = rs.keyInSelect(
				townActions,
				'These grounds are treacherous. Visit the Town Hall to register with the coordinator '
			);

			if (townOptions === 0) {
				townMap[player.y][player.x] = 0;
				player.y = 0;
				player.x = 0;
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 1) {
				console.log('You must register at Town Hall before utilizing these services.');
			} else if (townOptions === 2) {
				console.log('You must register at Town Hall before utilizing these services.');
			} else if (townOptions === 3) {
				console.log('You must register at Town Hall before utilizing these services.');
			} else if (townOptions === 4) {
				console.log('You must register at Town Hall before utilizing these services.');
			} else if (townOptions === 5) {
				player.checkStats();
			} else if (townOptions === 6) {
				player.checkMap(map);
			} else if (townOptions === -1) {
				gameOver = true;
				break;
			}
		} else {
			townOptions = rs.keyInSelect(
				townActions,
				'Can you feel it? The walls between the sane world and that unplumbed dimension of delirium are tenuously thin here...'
			);
			// Choose where to visit
			if (townOptions === 0) {
				townMap[player.y][player.x] = 0;
				player.moveUp(townMap);
				player.moveLeft(townMap);
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 1) {
				townMap[player.y][player.x] = 0;
				player.moveLeft(townMap);
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 2) {
				townMap[player.y][player.x] = 0;
				player.moveRight(townMap);
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 3) {
				townMap[player.y][player.x] = 0;
				player.moveUp(townMap);
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 4) {
				townMap[player.y][player.x] = 0;
				player.moveDown(townMap);
				townMap[player.y][player.x] = 8;
			} else if (townOptions === 5) {
				player.checkStats();
			} else if (townOptions === 6) {
				player.checkMap(townMap);
			}
		}
	}
	while (inTown && townMap[0][0] === 8 && player.class === 'Wanderer') {
		console.log(
			npcTalk(
				'Coordinator',
				'More arrive, foolishly seeking fortune and glory in this domain of the damned.'
			)
		);
		classOptions = rs.keyInSelect(
			classes,
			'What class are you, wanderer. How will you fight the horrors beneath'
		);
		if (classOptions === 0) {
			console.log(`
        Coordinator:

          Ah, a Crusader. A mighty sword-hand anchored by a holy purpose. A zealous warrior.
      `);

			player = new Crusader(
				name,
				player.y,
				player.x,
				player.level,
				player.xp,
				player.nextLevel
			);
			player.checkStats();
			if (rs.keyInYN('Are You Sure')) {
				player = new Crusader(
					name,
					player.y,
					player.x,
					player.level,
					player.xp,
					player.nextLevel
				);
				player.x = 0;
				player.y = 0;
			} else {
				player = new Player(name);
				player.x = 0;
				player.y = 0;
			}
		}
		if (classOptions === 1) {
			console.log(`
        Coordinator:
          To those with the keen eye, gold gleams like a dagger's point.
      `);
			player = new GraveRobber(
				name,
				player.y,
				player.x,
				player.level,
				player.xp,
				player.nextLevel
			);
			player.checkStats();
			if (rs.keyInYN('Are You Sure')) {
				player = new GraveRobber(
					name,
					player.y,
					player.x,
					player.level,
					player.xp,
					player.nextLevel
				);
			} else {
				player = new Player(name);
			}
		}
		if (classOptions === 2) {
			console.log(`
        Coordinator:
          Shoot, bandage and pillage: the dancing steps of war.
      `);
			player = new Arbalest(
				name,
				player.y,
				player.x,
				player.level,
				player.xp,
				player.nextLevel
			);
			player.checkStats();
			if (rs.keyInYN('Are You Sure')) {
				player = new Arbalest(
					name,
					player.y,
					player.x,
					player.level,
					player.xp,
					player.nextLevel
				);
			} else {
				player = new Player(name);
			}
		}
		if (classOptions === 3) {
			console.log(`
        Coordinator:
          Shifting, swaying—she mesmerizes her prey before the final strike.
      `);
			player = new ShieldBreaker(
				name,
				player.y,
				player.x,
				player.level,
				player.xp,
				player.nextLevel
			);
			player.checkStats();
			if (rs.keyInYN('Are You Sure')) {
				player = new ShieldBreaker(
					name,
					player.y,
					player.x,
					player.level,
					player.xp,
					player.nextLevel
				);
			} else {
				player = new Player(name);
			}
		}
	}
	while (inTown && townMap[0][0] === 8) {
		const townHallActions = [
			'Save Game',
			'Return to Town Square',
			'Check Inventory',
			'Check Stats',
			'Check Map'
		];

		console.log(
			npcTalk(
				'Coordinator',
				'Make no mistake, we will face ever greater threats. Our soldiers must be ready.'
			)
		);

		townHallOptions = rs.keyInSelect(townHallActions, 'What is it that you need this time.');

		if (townHallOptions === 0) {
			console.log(
				npcTalk(
					'Narrator',
					'I was lord of this place, before the crows and rats made it their domain.'
				)
			);
			console.log('Game is saved');
		} else if (townHallOptions === 1) {
			townMap[player.y][player.x] = 0;
			player.moveDown(townMap);
			player.moveRight(townMap);
			townMap[player.y][player.x] = 8;
		} else if (townHallOptions === 2) {
		} else if (townHallOptions === 3) {
			player.checkStats();
		} else if (townHallOptions === 4) {
			player.checkMap(townMap);
		}
	}
	while (inTown && townMap[1][0] === 8) {
		const apothActions = ['Buy Potions', 'Buy Salves', 'Cure Disease', 'Leave'];
		console.log(
			npcTalk('Shop Keep', 'The cost of preparedness - measured now in gold, later in blood.')
		);
		apothOptions = rs.keyInSelect(apothActions, 'What will it be.');
		if (apothOptions === 0) {
		} else if (apothOptions === 1) {
		} else if (apothOptions === 2) {
		} else if (apothOptions === 3) {
			townMap[player.y][player.x] = 0;
			player.y = 1;
			player.x = 1;
			townMap[player.y][player.x] = 8;
		}
	}
	while (inTown && townMap[0][1] === 8) {
		if (player.class === 'Grave Robber') {
			console.log(npcTalk('Priest', 'Your kind is not welcome here! Begone desecrator!'));
			townMap[player.y][player.x] = 0;
			player.y = 1;
			player.x = 1;
			townMap[player.y][player.x] = 8;
		} else {
			const abbeyActions = ['Pray', 'Confess', 'Leave'];
			console.log(ascii[1]);
			console.log(
				npcTalk(
					'Priest',
					'The cobwebs have been dusted, the pews set straight. The Abbey calls to the faithful...'
				)
			);
			abbeyOptions = rs.keyInSelect(abbeyActions, 'What can I help with today, my child');
			if (abbeyOptions === 0) {
			} else if (abbeyOptions === 1) {
			} else if (abbeyOptions === 2) {
				townMap[player.y][player.x] = 0;
				player.y = 1;
				player.x = 1;
				townMap[player.y][player.x] = 8;
			}
		}
	}
	while (inTown && townMap[1][2] === 8) {
		const smithActions = [
			'Buy Weapons',
			'Buy Armor',
			'Temper Weapons',
			'Temper Armor',
			'Leave'
		];
		console.log(
			npcTalk(
				'Blacksmith',
				'The bellows blast once again! The forge stands ready to make weapons of war.'
			)
		);
		smithOptions = rs.keyInSelect(
			smithActions,
			'It is dangerous out there! Do not go out alone!'
		);
		if (smithOptions === 0) {
		} else if (smithOptions === 1) {
		} else if (smithOptions === 2) {
		} else if (smithOptions === 3) {
		} else if (smithOptions === 4) {
			townMap[player.y][player.x] = 0;
			player.y = 1;
			player.x = 1;
			townMap[player.y][player.x] = 8;
		}
	}
	while (inTown && townMap[2][1] === 8) {
		const dungeonActions = ['Enter Dungeon', 'Leave'];
		console.log(
			npcTalk(
				'Narrator',
				'This sprawling estate, a Mecca of madness and morbidity. Your work begins...'
			)
		);
		dungeonOptions = rs.keyInSelect(
			dungeonActions,
			'Do you dare plunge into the pits of insanity?'
		);
		if (dungeonOptions === 0) {
			inTown = false;
			inDungeon = true;
		} else {
			townMap[player.y][player.x] = 0;
			player.y = 1;
			player.x = 1;
			townMap[player.y][player.x] = 8;
		}
	}
	if (inDungeon) {
		let map = [];
		createMap(8, 8, map, player);
		map[player.y][player.x] = 8;
		console.log(map);
		opn('https://www.youtube.com/watch?v=iX-eKFWXvG4&t=');
		let randomEnc;
		while (inDungeon && player.hp > 0) {
			console.log(
				npcTalk('Narrator', 'Pace out the halls of your lineage, once familiar, now foreign')
			);

			if (
				map[player.y][player.x] === 0 ||
				(map[player.y][player.x] === 8 && gameOver === false)
			) {
				randomEnc = Math.floor(Math.random() * (10 - 1)) + 1;
				if (randomEnc < 4) {
					enemy = new BoneSoldier(1);
					combat(player, playerInventory, enemy, lootTable);
				}
				player.displayMap(map, player.y, player.x, player.hp);
				dungeonOptions = rs.keyInSelect(
					dungeonActions,
					'Horrors. Death. All around you. Do you have the strength to carry on? '
				);
				if (dungeonOptions === 0) {
					console.log(
						'You look around in all four directions. It is too dark to see. Good luck'
					);
				} else if (dungeonOptions === 1) {
					player.moveUp(map);
				} else if (dungeonOptions === 2) {
					player.moveRight(map);
				} else if (dungeonOptions === 3) {
					player.moveDown(map);
				} else if (dungeonOptions === 4) {
					player.moveLeft(map);
				} else if (dungeonOptions === 5) {
					player.checkStats();
				} else if (dungeonOptions === 6) {
					inventory.check();
				} else if (dungeonOptions === 7) {
					gameOver = true;
					break;
				}
			} else if (map[player.y][player.x] === 3 && gameOver === false) {
				leaveActions = ['Stay', 'Check Inventory', 'Check Stats', 'Leave'];
				let exitOptions = rs.keyInSelect(
					leaveActions,
					'You found the exit! Do you want to leave?'
				);
				if (exitOptions === 3) {
					inDungeon = false;
					inTown = true;
					player.y = 1;
					player.x = 1;
					townMap[player.y][player.x] = 8;
				}
			}
		}
	}
}

console.log(`
	There is a place, beneath those ancient ruins, in the moor, that 
	calls out to the boldest among them... "We are the Flame!" they cry, 
	"And Darkness fears us!" They descend, spurred on by fantasies of riches 
	and redemption, to lay bare whatever blasphemous abnormality may slumber 
	restlessly in that unholy abyss... But Darkness is insidious. Terror and 
	Madness can find cracks in the sturdiest of armors, the most resolute of 
	minds... And below, in that limitless chasm of Chaos, they will realize the 
	truth of it. "We are not the Flame!" they will cry out, "We are but moths 
	and we are DOOMED!" And their screams will echo amidst the pitiless 
	cyclopean stones... 
	
	Of the Darkest Dungeon.
`);
