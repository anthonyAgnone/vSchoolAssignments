import React, { Component } from 'react';

import '../assets/css/sun.css';

export default class Sun extends Component {
	constructor() {
		super();
		this.calcSunPos = this.calcSunPos.bind(this);
	}

	calcSunPos() {
		if (this.props.time.hours < 12) {
			return {
				background: `radial-gradient(circle at ${this.props.time.ticks * 0.05555}% ${100 -
					this.props.time.ticks *
						0.11111}%, rgba(242,248,247,.7) 0%,rgba(249,249,28,.6) 1%,rgba(247,214,46,.6) 2%, rgba(248,200,95,.3) 4%,rgba(201,165,132,.2) 12%,rgba(115,130,133,.1) 51%,rgba(46,97,122,.1) 85%,rgba(24,75,106,.01) 100%)`
			};
		} else {
			return {
				background: `radial-gradient(circle at 30% ${1}% top,#666, #222)`
			};
		}
	}

	render() {
		return <div className="sun" style={this.calcSunPos()} />;
	}
}
