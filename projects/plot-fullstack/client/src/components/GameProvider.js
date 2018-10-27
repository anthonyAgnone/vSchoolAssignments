import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

export default class GameProvider extends Component {
	constructor(props) {
		super(props);
		//this nis where I can get my array from the db to get psoitions of pieces
		this.state = {
			position: [3, 7],
			pieces: [
				{
					id: 1,
					type: 'roomNoWall',
					position: [1, 4],
					material: 'wood'
				},
				{
					id: 2,
					type: 'roomNoWall',
					position: [3, 5],
					material: 'tile'
				},
				{
					id: 3,
					type: 'garden',
					position: [1, 2],
					material: null
				},
				{
					id: 6,
					type: 'garden',
					position: [7, 4],
					material: null
				},
				{
					id: 4,
					type: 'roomWallSouth',
					position: [7, 6],
					material: 'wood'
				}
			]
		};
		this.moveTo = this.moveTo.bind(this);
	}

	// moveTo(x, y) {
	// 	this.setState({ position: [x, y] });
	// }

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
		const value = { ...this.state, moveTo: this.moveTo };
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}
export const withGameContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
