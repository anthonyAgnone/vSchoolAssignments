import React, { Component } from 'react';

import Button from './components/Button';
import Square from './components/Square';

import './assets/css/app.css';

import click from './assets/sounds/click.wav';
import powerUp from './assets/sounds/powerUp.mp3';
import powerUp2 from './assets/sounds/powerUp2.mp3';
import powerUp3 from './assets/sounds/powerUp3.mp3';

const clickSound = new Audio(click);
const powerUpSound = new Audio(powerUp);
const powerUp2Sound = new Audio(powerUp2);
const powerUp3Sound = new Audio(powerUp3);

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			topLeft: {
				backgroundColor: ''
			},
			topRight: {
				backgroundColor: ''
			},
			bottomLeft: {
				backgroundColor: ''
			},
			bottomRight: {}
		};
		this.setBlackAndWhite = this.setBlackAndWhite.bind(this);
		this.setTopPurple = this.setTopPurple.bind(this);
		this.setBlue = this.setBlue.bind(this);
		this.makeFlash = this.makeFlash.bind(this);
	}

	setBlackAndWhite() {
		this.setState({
			topLeft: {
				className: 'square black'
			},
			topRight: {
				className: 'square white'
			},
			bottomLeft: {
				className: 'square black'
			},
			bottomRight: {
				className: 'square white'
			}
		});
		this.playSound(clickSound);
	}
	setTopPurple() {
		this.setState({
			topLeft: {
				className: 'square purple'
			},
			topRight: {
				className: 'square purple'
			}
		});
		this.playSound(clickSound);
	}

	setBlue(square) {
		this.setState({
			[square]: {
				className: 'square blue'
			}
		});
		this.playSound(clickSound);
	}

	makeFlash(square) {
		this.setState({
			[square]: {
				className: 'square flash'
			}
		});
		this.playSound(clickSound);
	}

	playSound(sound) {
		sound.play();
	}
	render() {
		return (
			<div className="pageWrap">
				<div className="buttons">
					<Button onClick={this.setBlackAndWhite} title="Small Time" />

					<Button onClick={this.setTopPurple} title="Party" />

					<Button onClick={() => this.setBlue('bottomLeft')} title="Professional" />
					<Button onClick={() => this.setBlue('bottomRight')} title="Professional" />

					<Button onClick={() => this.makeFlash('topLeft')} title="BigTime" />
					<Button onClick={() => this.makeFlash('topRight')} title="BigTime" />
					<Button onClick={() => this.makeFlash('bottomLeft')} title="BigTime" />
					<Button onClick={() => this.makeFlash('bottomRight')} title="BigTime" />
				</div>
				<div className="squares">
					<Square styles={this.state.topLeft} />
					<Square styles={this.state.topRight} />
					<Square styles={this.state.bottomLeft} />
					<Square styles={this.state.bottomRight} />
				</div>
			</div>
		);
	}
}
