document.addEventListener('DOMContentLoaded', function(event) {
	setTimeout(function() {
		document.querySelector('.curtain').classList.add('loaded');
		document.querySelector('.intro').classList.add('loadIntro');
		document.querySelector('.h1').classList.add('loadtext');
		document.querySelector('.start').classList.add('visible');
		document.querySelector('.hills').classList.add('hillsLoaded');
	}, 2000);
});

const counterDiv = document.getElementById('counter');
const gameWindow = document.getElementById('gameWindow');
const showNav = document.getElementById('showNav');
const playerOneStart = document.querySelector('.start');
let goombaCounter = 0;
let bomCounter = 0;
let cheepCounter = 0;
let total = 0;

document.getElementById('form').bobOmbInput.value = bomCounter;
document.getElementById('form').goombaInput.value = goombaCounter;
document.getElementById('form').cheepInput.value = cheepCounter;
counterDiv.innerHTML = 0;

const baddies = [
	{
		name: 'bobOmb',
		form: document.getElementById('form').bobOmbInput,
		hitBox: 'bobHitBox',
		image: `
      <div class="coin">
        <div class="inner-coin"></div>
      </div>
      <div class="bob-omb" id="bob-omb">
        <div class="winder">
          <div class="windhori"></div>
          <div class="windverti"></div>
        </div>
        <div class="bob-body">
          <div class="bob-eye"></div>
          <div class="bob-eye"></div>
        </div>
        <div class="bob-feet">
          <div class="foot"></div>
          <div class="foot"></div>
        </div>
      </div>
    `,
		deathAnimation: 'bomDeath',
		value: 7
	},
	{
		name: 'goomba',
		form: document.getElementById('form').goombaInput,
		hitBox: 'goombaHitBox',
		image: `
        <div class="coin">
          <div class="inner-coin"></div>
        </div>
        <div class="goomba"></div>
    `,
		deathAnimation: 'goombaDeath',
		value: 5
	},
	{
		name: 'cheep',
		form: document.getElementById('form').cheepInput,
		hitBox: 'cheepHitBox',
		image: `
      <div class="coin">
        <div class="inner-coin"></div>
      </div>
      <div class="cheepBody">
      </div>
    `,
		deathAnimation: 'cheepDeath',
		value: 11
	}
];

const createRandomBaddies = () => {
	let random = Math.floor(Math.random() * 5) + 2;
	for (i = 0; i < random; i++) {
		baddie(0);
	}
	random = Math.floor(Math.random() * 7) + 1;
	for (i = 0; i < random; i++) {
		baddie(1);
	}
	random = Math.floor(Math.random() * 3) + 1;
	for (i = 0; i < random; i++) {
		baddie(2);
	}
};

const baddie = i => {
	let baddieForm = baddies[i].form;
	let baddieValue = baddies[i].value;
	let baddieDeath = baddies[i].deathAnimation;
	let hitBox = document.createElement('div');
	hitBox.className = baddies[i].hitBox;
	hitBox.id = baddies[i].name;
	hitBox.style.left = Math.floor(Math.random() * 1000) + 1 + 'px';
	hitBox.innerHTML = baddies[i].image;
	gameWindow.appendChild(hitBox);
	addEvents(hitBox, baddieForm, baddieValue, baddieDeath);
};

const addEvents = (el, baddieForm, baddieValue, baddieDeath) => {
	el.addEventListener('mouseenter', function() {
		let coin = el.querySelector('.coin');
		el.classList.add(baddieDeath);
		coin.classList.add('coinAnimate');
		setTimeout(function() {
			gameWindow.removeChild(el);
		}, 600);
		if (el.id === 'bobOmb') {
			bomCounter++;
			baddieForm.value = bomCounter;
		} else if (el.id === 'goomba') {
			goombaCounter++;
			baddieForm.value = goombaCounter;
		} else {
			cheepCounter++;
			baddieForm.value = cheepCounter;
		}
		total += baddieValue;
		counterDiv.innerHTML = total;
	});
};

gameWindow.addEventListener('mousemove', event => {
	if (event.pageY > 560) {
		gameWindow.classList = 'game-area standingMario';
	} else if (event.pageY < 520) {
		gameWindow.classList = 'game-area flyingMario';
	} else {
		gameWindow.classList = 'game-area';
	}
});

showNav.addEventListener('click', () => {
	let formPanel = document.querySelector('.side-nav');
	formPanel.classList.toggle('moved');
});

playerOneStart.addEventListener('click', event => {
	let start = document.querySelector('.intro');
	event.preventDefault();
	start.style.transitionDelay = '0s';
	start.style.transition = 'all .5s linear';
	start.classList.add('fadeOut');
	createRandomBaddies();
});

let loadMore = document.getElementById('load-more');

loadMore.addEventListener('click', () => {
	createRandomBaddies();
});

const createClouds = () => {
	let random = Math.floor(Math.random() * 10) + 1;
	for (i = 0; i < random; i++) {
		let cloud = document.createElement('div');
		let scaleFactor = Math.random() * 0.5 + 0.9;
		cloud.className = 'cloud';
		cloud.style.top = Math.floor(Math.random() * 45) + 1 + '%';
		cloud.style.left = Math.floor(Math.random() * 100) + 1 + '%';
		cloud.style.transform = `scale(${scaleFactor})`;
		gameWindow.appendChild(cloud);
	}
	// number;
};

createClouds();

const submitButton = document.getElementById('submitForm');

submitButton.addEventListener('click', event => {
	event.preventDefault();
	let invoice = document.querySelector('.invoice');
	let bombs = document.getElementById('form').bobOmbInput.value;
	let goombas = document.getElementById('form').goombaInput.value;
	let cheeps = document.getElementById('form').cheepInput.value;
	let goombaTotal = document.getElementById('goombaTotal');
	let bobombTotal = document.getElementById('bobombTotal');
	let cheepTotal = document.getElementById('cheepTotal');
	let bobValue = document.getElementById('bobValue');
	let goombaValue = document.getElementById('goombaValue');
	let cheepValue = document.getElementById('cheepValue');
	let finalTotal = document.getElementById('finalTotal');
	bobValue.innerHTML = baddies[0].value;
	goombaValue.innerHTML = baddies[1].value;
	cheepValue.innerHTML = baddies[2].value;
	goombaTotal.innerHTML = goombas;
	bobombTotal.innerHTML = bombs;
	cheepTotal.innerHTML = cheeps;

	let grandTotal =
		bombs * baddies[0].value + goombas * baddies[1].value + cheeps * baddies[2].value;

	finalTotal.innerHTML = grandTotal;

	invoice.classList.add('invoice-in');
});
