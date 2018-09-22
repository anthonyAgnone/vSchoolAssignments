let setCountDown = 10;
let start = false;
var clickCount = localStorage.getItem('clicks');
const button = document.getElementById('start');
const clear = document.getElementById('clear');
document.getElementById('timer').innerHTML = setCountDown;
if (localStorage.clicks !== undefined) {
	document.getElementById('root').innerHTML = localStorage.clicks;
}

button.addEventListener('click', function() {
	start = !start;
});

setInterval(function() {
	if (start) {
		setCountDown--;
		if (setCountDown === -1) {
			start = false;
			setCountDown = 10;
		}
		document.getElementById('timer').innerHTML = setCountDown;
	}
}, 1000);

window.addEventListener('click', function() {
	if (start) {
		clickCount++;
		localStorage.setItem('clicks', clickCount);
		document.getElementById('root').innerHTML = localStorage.clicks;
	}
});

clear.addEventListener('click', function() {
	localStorage.removeItem('clicks');
	localStorage.clicks = 0;
	document.getElementById('root').innerHTML = localStorage.clicks;
});
