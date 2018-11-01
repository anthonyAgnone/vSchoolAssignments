import React from 'react';
import { DragSource } from 'react-dnd';

import { Types } from '../lib/constants';

import wood from '../assets/wood2.png';
import tile from '../assets/tile.png';

import '../assets/css/room.css';

const spec = {
	beginDrag({ _id }) {
		return { _id };
	}
};

const collect = (connect, monitor) => {
	return {
		dragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
};

function Room({ dragSource, isDragging, type, material, wall, handleIsEditing }) {
	const materialBackground = () => {
		if (material === 'wood') {
			return wood;
		} else if (material === 'tile') {
			return tile;
		}
	};

	const calcWall = () => {
		if (wall === 'east') return '0 10px 0 0';
		else if (wall === 'south') return '0 0 10px 0';
		else if (wall === 'west') return '0 0 0 10px';
		else if (wall === 'north') return '10px 0 0 0';
		else if (wall === 'northWest') return '10px 0 0 10px';
		else if (wall === 'northEast') return '10px 10px 0 0';
		else if (wall === 'southWest') return '0 0 10px 10px';
		else if (wall === 'southEast') return '0 10px 10px 0';
		else if (wall === 'northSouthEast') return '10px 10px 10px 0';
		else if (wall === 'northSouthWest') return '10px 0 10px 10px';
		else if (wall === 'southEastWest') return '0 10px 10px 10px';
		else if (wall === 'northEastWest') return '10px 10px 0 10px';
		else if (wall === 'northSouth') return '10px 0 10px 0';
		else if (wall === 'eastWest') return '0 10px 0 10px';
		else return '0';
	};
	const style = {
		room: {
			backgroundImage: `url(${materialBackground()})`,
			opacity: isDragging ? 0 : 1,
			borderWidth: calcWall()
		},
		garden: {
			opacity: isDragging ? 0 : 1
		}
	};
	return dragSource(
		<div onClick={handleIsEditing} style={style[type]} className={`piece ${type}`} />
	);
}

export default DragSource(Types.PIECE, spec, collect)(Room);
