let form = document.getElementById('toDoForm');
let display = document.getElementById('root');
let submit = document.getElementById('submit');
let root = document.getElementById('root');
let deleteButtons = document.querySelectorAll('.deleteBtn');
let checkBoxes = document.querySelectorAll('.checkbox');
let toDo = [];

form.addEventListener('submit', function(e) {
	e.preventDefault();
	let listItem = {
		title: this.title.value,
		description: this.desc.value,
		points: this.points.value
	};
	toDo.push(listItem);
	read();
	deleteButtons = document.querySelectorAll('.deleteBtn');
	checkBoxes = document.querySelectorAll('.checkbox');
	addEvents();
	this.reset();
});

const read = () => {
	let i = toDo.length - 1;
	let listItem = document.createElement('div');
	listItem.className = 'toDo';
	root.appendChild(listItem);
	let title = document.createElement('p');
	let completed = document.createElement('p');
	let description = document.createElement('p');
	let points = document.createElement('p');
	let deleteButton = document.createElement('button');
	deleteButton.className = 'deleteBtn';
	let checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.className = 'checkbox';
	title.innerHTML = `Title: ${toDo[i].title}`;
	description.innerHTML = `Description ${toDo[i].description}`;
	points.innerHTML = `Points ${toDo[i].points}`;
	deleteButton.innerHTML = 'X';
	completed.innerHTML = 'Completed';
	listItem.appendChild(title);
	listItem.appendChild(completed);
	listItem.appendChild(description);
	listItem.appendChild(points);
	listItem.appendChild(deleteButton);
	completed.appendChild(checkBox);
	console.log(checkBoxes);
};

const addEvents = () => {
	deleteButtons.forEach(function(button) {
		button.addEventListener('click', function(e) {
			let target = e.target;
			let parent = target.parentNode;
			root.removeChild(parent);
		});
	});

	checkBoxes.forEach(function(box) {
		box.addEventListener('change', function(e) {
			let boxTarget = e.target;
			let boxParent = boxTarget.parentNode;
			boxParent.classList.toggle('checked');
		});
	});
};
