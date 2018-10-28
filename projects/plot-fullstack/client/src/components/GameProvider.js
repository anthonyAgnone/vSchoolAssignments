import React, { Component, createContext } from 'react';
import update from 'immutability-helper';

const { Consumer, Provider } = createContext();

export default class GameProvider extends Component {
	constructor(props) {
		super(props);
		//this nis where I can get my array from the db to get psoitions of pieces
		this.state = {
			// position: [3, 7],
			pieces: [
				{
					id: 1,
					type: 'room',
					position: [1, 4],
					material: 'wood',
					wall: null
				},
				{
					id: 2,
					type: 'room',
					position: [3, 5],
					material: 'tile',
					wall: null
				},
				{
					id: 3,
					type: 'garden',
					position: [1, 2],
					material: null,
					wall: null
				},
				{
					id: 6,
					type: 'garden',
					position: [7, 4],
					material: null,
					wall: null
				},
				{
					id: 4,
					type: 'room',
					position: [7, 6],
					material: 'wood',
					wall: 'south'
				},
				{
					id: 5,
					type: 'room',
					position: [4, 6],
					material: 'wood',
					wall: 'east'
				},
				{
					id: 7,
					type: 'room',
					position: [5, 6],
					material: 'wood',
					wall: 'north'
				},
				{
					id: 9,
					type: 'room',
					position: [0, 0],
					material: 'wood',
					wall: 'west'
				},
				{
					id: 10,
					type: 'room',
					position: [0, 1],
					material: 'wood',
					wall: 'northWest'
				},
				{
					id: 11,
					type: 'room',
					position: [0, 2],
					material: 'wood',
					wall: 'northEast'
				},
				{
					id: 12,
					type: 'room',
					position: [0, 3],
					material: 'wood',
					wall: 'southWest'
				},
				{
					id: 13,
					type: 'room',
					position: [0, 4],
					material: 'wood',
					wall: 'southEast'
				},
				{
					id: 14,
					type: 'room',
					position: [0, 5],
					material: 'wood',
					wall: 'northSouthEast'
				},
				{
					id: 15,
					type: 'room',
					position: [0, 6],
					material: 'wood',
					wall: 'northSouthWest'
				},
				{
					id: 16,
					type: 'room',
					position: [0, 7],
					material: 'wood',
					wall: 'southEastWest'
				},
				{
					id: 17,
					type: 'room',
					position: [1, 1],
					material: 'wood',
					wall: 'northEastWest'
				}
			]
		};
		this.moveTo = this.moveTo.bind(this);
		this.findMissing = this.findMissing.bind(this);
		this.handleChangeMaterial = this.handleChangeMaterial.bind(this);
	}

	findMissing(array) {
		const len = array.length;
		const sum = ((len + 1) * (array[0] + array[len - 1])) / 2;
		const res = sum - array.reduce((x, y) => x + y);
		return res;
	}

	// handleChangeMaterial(id, material) {
	// 	this.setState({
	// 		pieces: [id - 1]

	// 	});
	// }

	//I had an idea that I could make a representation of the state map
	// by loopsing through and places an x in an 8 x 8 grid if the piece position
	// matched the current position when making map. That sounds silly long
	// I took this solution off the internet for now
	handleAddPiece(type, material, wall) {
		const xCords = [];
		this.state.pieces.map(piece => {
			xCords.push(piece.position[0]);
		});
		const filteredX = [...new Set(leftPieces)];
		filteredX.sort();
		const freeSpace = findMissing(filteredX);

		const id = this.state.pieces.length;
		const position = [freeSpace, 0];
		const newObject = {
			id: id,
			type: type,
			position: position,
			material: material,
			wall: wall
		};
		const pieces = this.state.pieces;
		const newPieces = update(pieces, { $push: [newObject] });
		this.setState({
			pieces: newPieces
		});
	}

	moveTo(x, y, id) {
		this.setState(prevState => ({
			pieces: prevState.pieces.map(piece => {
				if (piece.id === id) {
					return { ...piece, position: [x, y] };
				} else {
					return piece;
				}
			})
		}));
	}

	render() {
		const value = {
			...this.state,
			moveTo: this.moveTo,
			findMissing: this.findMissing,
			handleAddPiece: this.handleAddPiece
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}
export const withGameContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
