import React, { Component } from 'react';
import Room from './Room';
import Grid from './Grid';

export default class Ground extends Component {
	renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);

		const [roomX, roomY] = this.props.roomPosition;
		const piece = x === roomX && y === roomY ? <Room /> : null;

		return (
			<div key={i} style={{ width: '12.5%', height: '12.5%' }}>
				<Grid>{piece}</Grid>
			</div>
		);
	}
	render() {
		const groundColors = ['#1f2b0e', '#8ec63f', '#edc672', '#783938'];
		const style = {
			ground: {
				backgroundColor: groundColors[this.props.timestamp],
				height: '932px',
				width: '932px',
				position: 'absolute',
				top: '-5vh',
				left: '50%',
				transform: 'translateX(-50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg)',
				transition: 'all 2s ease',
				display: 'flex',
				flexWrap: 'wrap'
			}
		};

		const squares = [];
		for (let i = 0; i < 64; i++) {
			squares.push(this.renderSquare(i));
		}
		return (
			<div className="ground-container">
				<div id="ground" className="ground" style={style.ground}>
					{squares}
				</div>
			</div>
		);
	}
}
