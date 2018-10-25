import React from 'react';

export default function Room({ position, itemType, id }) {
	const style = {
		room: {
			backgroundColor: '#fff',
			width: '100%',
			height: '100%'
		}
	};
	return (
		<div id={id} className="room" style={style.room}>
			room
		</div>
	);
}
