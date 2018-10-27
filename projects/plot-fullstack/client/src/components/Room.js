import React from 'react';
import { DragSource } from 'react-dnd';

import { Types } from '../lib/constants';

const spec = {
	beginDrag({ id }) {
		console.log(id);
		return { id };
	}
};

const collect = (connect, monitor) => {
	return {
		dragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
};

function Room({ dragSource, isDragging, type, material }) {
	const materialBackground = () => {
		if (material === 'wood') {
			return 'yellow';
		} else if (material === 'tile') {
			return '#cef';
		}
	};
	const style = {
		roomNoWall: {
			backgroundColor: materialBackground(),
			width: '100%',
			height: '100%',
			opacity: isDragging ? 0 : 1,
			cursor: 'pointer'
		},
		roomWallSouth: {
			backgroundColor: materialBackground(),
			width: '100%',
			height: '100%',
			borderBottom: '15px solid black',
			opacity: isDragging ? 0 : 1,
			cursor: 'pointer'
		},
		garden: {
			backgroundColor: 'green',
			width: '80%',
			height: '80%',
			margin: '10% auto',
			opacity: isDragging ? 0 : 1,
			cursor: 'pointer'
		}
	};
	return dragSource(
		<div style={style[type]} className="piece">
			{material ? `${type} ${material}` : type}
		</div>
	);
}

export default DragSource(Types.PIECE, spec, collect)(Room);
