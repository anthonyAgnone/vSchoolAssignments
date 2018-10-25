import React, { Component } from 'react';

export default class Grid extends Component {
	render() {
		const style = {
			outside: {
				width: '100%',
				height: '100%',
				boxShadow: 'inset 0 0 10px rgba(255,255,255,.4)'
			}
		};
		return (
			<div className="square-container" style={style.outside}>
				{this.props.children}
			</div>
		);
	}
}
