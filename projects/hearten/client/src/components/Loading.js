import React from 'react';
import Colors from '../assets/Colors';

import lightbulb from '../assets/images/lightbulb.png';
import lightrays from '../assets/images/lightRays.png';

import '../assets/loadingAnimation.css';

export default ({ loading, children }) => {
	const style = {
		wrapper: {
			minWidth: '300px',
			maxWidth: '300px',
			height: '200px',
			marginRight: '20px',
			backgroundColor: Colors.highlight,
			transition: 'all .3s ease',
			overflow: 'hidden',
			position: 'relative',
			lightBulb: {
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0
			},
			lightRay: {
				width: '100%',
				height: '100%',
				position: 'absolute',
				top: 0,
				left: 0,
				animation: 'load 1s infinite ease'
			}
		}
	};
	return loading ? (
		<div className="loadingWrapper" style={style.wrapper}>
			<img src={lightbulb} alt="" className="lightBulb" style={style.wrapper.lightBulb} />
			<img src={lightrays} alt="" className="lightRay" style={style.wrapper.lightRay} />
		</div>
	) : (
		children
	);
};
