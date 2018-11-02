import openSocket from 'socket.io-client';
import { Interval } from './lib/constants';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
	socket.on('timer', timestamp => cb(null, timestamp));
	socket.emit('subscribeToTimer', Interval.interval);
}

export { subscribeToTimer };
