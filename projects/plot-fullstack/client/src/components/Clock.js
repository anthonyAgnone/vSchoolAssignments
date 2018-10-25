import React from 'react';

export default function Clock({ time: { minutes, hours, timeOfDay } }) {
	const hourFormat = () => {
		if (hours < 10) {
			return `0${hours}`;
		} else if (hours >= 13) {
			return hours - 12;
		} else {
			return hours;
		}
	};

	const minuteFormat = () => {
		if (minutes < 10) {
			return `0${minutes}`;
		} else {
			return minutes;
		}
	};

	const formatTimeOfDay = [
		'at night',
		'in the morning',
		'in the afternoon',
		'in the evening'
	];

	const style = {
		clock: {
			position: 'absolute',
			width: '205px',
			height: '205px',
			border: '1px solid black',
			borderRadius: '50%'
		},
		minutes: {
			width: '100px',
			borderBottom: '1px solid black',
			height: '1px',
			position: 'absolute',
			left: '50%',
			top: '50%',
			display: 'block',
			transformOrigin: 'left',
			transform: `rotate(${270 + minutes * 6}deg)`
		},
		hours: {
			width: '68px',
			borderBottom: '1px solid black',
			height: '1px',
			position: 'absolute',
			left: '50%',
			top: '50%',
			display: 'block',
			transformOrigin: 'left',
			transform: `rotate(${270 + hours * 30}deg)`,
			transition: 'all .2s linear'
		}
	};

	return (
		<div className="clock">
			<p className="clock-text">
				{hourFormat()} : {minuteFormat()} {formatTimeOfDay[timeOfDay]}
			</p>
			<div style={style.clock}>
				<span style={style.minutes} />
				<span style={style.hours} />
			</div>
		</div>
	);
}
