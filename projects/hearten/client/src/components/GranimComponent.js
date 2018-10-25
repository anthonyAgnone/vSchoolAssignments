import React, { Component } from 'react';
import { withGlobalContext } from './GlobalState';

class GranimComponent extends Component {
	render() {
		const style = {
			gradient: {
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				zIndex: -1
			},
			button: {
				position: 'absolute',
				bottom: '100px',
				left: '50%',
				transform: 'translateX(-50%)'
			}
		};
		return <canvas id="granim-canvas" ref={this.props.genRef} style={style.gradient} />;
	}
}

export default withGlobalContext(GranimComponent);
