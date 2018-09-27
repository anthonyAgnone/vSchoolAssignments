const url = 'https://api.vschool.io/agnone/todo/';
const form = document.getElementById('submitForm');
const list = document.getElementById('list');
const deleteArea = document.getElementById('deleteArea');
const completeArea = document.getElementById('completeArea');

let responseData;

let newTodo = {
	title: '',
	description: '',
	price: 0,
	imgUrl: '',
	completed: false
};

form.addEventListener('submit', e => {
	e.preventDefault();
	let randoXPos = Math.floor(Math.random() * (window.innerWidth - 420) + 20);
	let randoYPos = Math.floor(Math.random() * (window.innerHeight - 350) + 20);
	newTodo.title = `${form.category.value}_${form.date.value}_${
		form.title.value
	}_${randoXPos}_${randoYPos}`;
	newTodo.description = form.desc.value;
	newTodo.price = form.urgency.value;
	newTodo.imgUrl = form.image.value;
	postForm();
	form.reset();
});

const getData = () => {
	axios
		.get(url)
		.then(response => {
			responseData = response.data;
			responseData.forEach(data => {
				displayData(data);
			});
		})
		.catch(function(err) {
			console.log(err);
		});
};

const postForm = () => {
	axios
		.post(url, newTodo)
		.then(response => {
			displayData(response.data);
			console.log(response.data);
		})
		.catch(err => {
			console.log(err);
		});
};

let monthList = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const displayData = data => {
	let { title, _id, description, imgUrl, price } = data;
	let splitTitle = title.split('_');
	let [listCategory, listDate, listTitle, xPos, yPos] = splitTitle;

	let listItem = document.createElement('div');
	let displayTitle = document.createElement('h1');
	let displayDate = document.createElement('p');
	let displayPrice = document.createElement('p');
	let displayDescription = document.createElement('p');
	let listUrl = document.createElement('div');

	listItem.id = _id;
	listItem.classList.add('list-item');
	listItem.style.left = `${xPos}px`;
	listItem.style.top = `${yPos}px`;
	displayTitle.classList.add('list-title');
	displayDate.classList.add('list-date');
	listUrl.classList.add('list-image');

	displayTitle.innerHTML = listTitle;
	displayDate.innerHTML = reformatDate(listDate);
	displayPrice.innerHTML = price;
	displayDescription.innerHTML = description;
	listUrl.style.backgroundImage = `url(${imgUrl})`;

	if (listCategory === 'Cat 1') {
		listItem.style.background = '#093a3e';
	} else if (listCategory === 'Cat 2') {
		listItem.style.background = '#2e1f47';
	} else if (listCategory === 'Cat 3') {
		listItem.style.background = '#5e1717';
	} else {
		listItem.style.background = '#002c56';
	}

	let elements = [displayTitle, displayDate, displayDescription, listUrl];

	list.appendChild(listItem);

	for (i = 0; i < elements.length; i++) {
		listItem.appendChild(elements[i]);
	}

	resizeElements();
	draggable(listItem, data);
};

// I know that this is really goofy, but I was not able to just split the data for some reason?
const reformatDate = (date = '2018-9-26') => {
	let newDate = '' + date;
	let splitDate = newDate.split('-');
	[year, month, day] = splitDate;

	return `${monthList[month - 1]} ${day}, ${year}`;
};

const addEvents = (button, id) => {
	button.addEventListener('click', () => {
		let deleteRequest = axios.delete(url + id);
		deleteRequest.then(res => {
			list.removeChild(button.parentNode);
			resizeElements();
		});
	});
};

const resizeElements = () => {
	let items = document.querySelectorAll('.list-item');
	Array.from(items).forEach(item => {
		item.style.transform = `scale(${1 - 0.1 * items.length})`;
	});
};
const randomPosition = listItem => {
	listItem.style.left = `${Math.floor(Math.random() * (window.innerWidth - 420) + 20)}px`;
	listItem.style.top = `${Math.floor(Math.random() * (window.innerHeight - 170) + 20)}px`;
};

getData();

const header = document.getElementById('header');

header.addEventListener('click', () => {
	submitForm.classList.toggle('expanded');
});

const draggable = (el, data) => {
	el.addEventListener('mousedown', mouseDown, false);

	function mouseDown() {
		stateMouseDown = true;
		document.addEventListener('mousemove', mouseMove, false);
		deleteArea.classList.add('visible');
		completeArea.classList.add('visible');
		el.classList.add('show-details');
	}

	function mouseMove(e) {
		let deletePosition = deleteArea.getBoundingClientRect();
		let completePosition = completeArea.getBoundingClientRect();
		let elPosition = el.getBoundingClientRect();
		let posX = e.clientX - elPosition.width / 2;
		let posY = e.clientY - elPosition.height / 2;
		el.style.left = `${posX}px`;
		el.style.top = `${posY}px`;
		document.addEventListener('mouseup', mouseUp, false);
		if (elPosition.bottom >= deletePosition.top) {
			deleteArea.style.opacity = '1';
		} else {
			deleteArea.style.opacity = '.3';
		}
		if (elPosition.top <= completePosition.bottom) {
			completeArea.style.opacity = '1';
		} else {
			completeArea.style.opacity = '.5';
		}
	}

	function mouseUp() {
		let deletePosition = deleteArea.getBoundingClientRect();
		let completePosition = completeArea.getBoundingClientRect();
		let elPosition = el.getBoundingClientRect();
		document.removeEventListener('mousemove', mouseMove, false);
		document.removeEventListener('mouseup', mouseUp, false);
		deleteArea.classList.remove('visible');
		completeArea.classList.remove('visible');
		el.classList.remove('show-details');
		if (elPosition.bottom >= deletePosition.top) {
			let deleteRequest = axios.delete(url + el.id);
			deleteRequest.then(res => {
				el.parentNode.removeChild(el);
				resizeElements();
			});
		} else if (elPosition.top <= completePosition.bottom) {
			let updateRequest = axios.put(url + el.id, {
				completed: true
			});
			updateRequest.then(res => {
				console.log('completed' + res);
			});
		} else {
			updatePos(el, data);
		}
	}
};

const updatePos = (el, data) => {
	let elPosition = el.getBoundingClientRect();
	let { title, _id, description, imgUrl, price } = data;
	let splitTitle = title.split('_');
	let [listCategory, listDate, listTitle, xPos, yPos] = splitTitle;
	axios
		.put(url + el.id, {
			title: `${listCategory}_${listDate}_${listTitle}_${elPosition.left - 90}_${
				elPosition.top
			}`,
			description: description,
			price: price,
			imgUrl: imgUrl,
			completed: false
		})
		.then(response => {
			console.log('updated' + response);
		})
		.catch(err => {
			console.log(err);
		});
};
