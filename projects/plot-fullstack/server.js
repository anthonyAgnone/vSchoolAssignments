const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/plots', require('./routes/plots'));
app.use('/api/pieces', require('./routes/pieces'));
app.use('/api/users', require('./routes/users'));
app.use('/api/subPieces', require('./routes/subPieces'));
app.use('/api/messages', require('./routes/messages'));

mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true },
	() => {
		console.log('Connected to MongoDB');
	}
);

const currentTime = {
	hours: 0,
	minutes: 0,
	timeOfDay: 0,
	ticks: 0,
	totalTicks: 0
};

function handleClock() {
	if (currentTime.ticks < 721) {
		currentTime.ticks++;
	}

	if (currentTime.ticks === 720) {
		currentTime.ticks = 0;
	}

	if (currentTime.minutes + 1 === 60) {
		currentTime.minutes = 0;
		if (currentTime.hours + 1 === 24) {
			currentTime.hours = 0;
		} else {
			currentTime.hours += 1;
		}
	} else {
		currentTime.minutes += 1;
	}

	if (currentTime.hours > 5 && currentTime.hours < 12) currentTime.timeOfDay = 1;
	else if (currentTime.hours >= 12 && currentTime.hours < 18) currentTime.timeOfDay = 2;
	else if (currentTime.hours >= 18 && currentTime.hours < 21) currentTime.timeOfDay = 3;
	else currentTime.timeOfDay = 0;

	currentTime.totalTicks++;
}

const server = app.listen(process.env.PORT, () => {
	console.log('Connected on port ' + process.env.PORT);
});
const io = require('socket.io').listen(server);

io.on('connection', client => {
	client.on('subscribeToTimer', interval => {
		console.log('client is subscribing to server clock with interval ', interval);
		setInterval(() => {
			handleClock();
			client.emit('timer', currentTime);
		}, interval);
	});
	io.on('connection', function(socket) {
		console.log('A user connected');
		socket.on('disconnect', function() {
			console.log('User Disconnected');
		});

		socket.on('sent_message', function(msg) {
			console.log('message: ' + msg);
			const message = {
				user: 'anon',
				message: msg
			};
			axios
				.post('/api/messages', message)
				.then(response => {
					socket.emit('message', response.data.message);
				})
				.catch(err => console.error(err));
		});
	});
});
