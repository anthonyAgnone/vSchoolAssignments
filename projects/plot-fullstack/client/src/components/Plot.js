import React, { Component } from 'react';
import { subscribeToTimer } from '../api';
import Granim from 'granim';

import Ground from './Ground';
import Clock from './Clock';

export default class Plot extends Component {
	constructor(props) {
		super(props);

		subscribeToTimer((err, timestamp) => {
			this.setState({
				minutes: timestamp.minutes,
				hours: timestamp.hours,
				timeOfDay: timestamp.timeOfDay
			});
		});

		this.state = {
			minutes: 0,
			hours: 0,
			timeOfDay: 0,
			granim: null
		};

		this.calcSunPos = this.calcSunPos.bind(this);
	}
	calcSunPos() {
		if (this.state.timeOfDay === 0 || this.state.timeOfDay === 1) {
			return {
				position: 'absolute',
				left: '50%',
				top: `${100 - this.state.hours * 8.33333 - 10}vh`,
				width: '20vh',
				height: '20vh',
				borderRadius: '50%',
				transform: 'translateX(-50%)',
				background:
					'radial-gradient(ellipse farthest-corner at 50% 50%, rgba(255, 255, 50, 0.8) 0%, rgba(255, 255, 80, 0.2) )',
				opacity: 0.8,
				transition: 'all 1.3s linear'
			};
		} else if (this.state.hours === 12) {
			return {
				position: 'absolute',
				left: '50%',
				bottom: `${100 - (this.state.hours - 12) * 8.333333 - 20}vh`,
				width: '20vh',
				height: '20vh',
				borderRadius: '50%',
				transform: 'translateX(-50%)',
				background:
					'radial-gradient(ellipse farthest-corner at 50% 50%, rgba(255, 255, 50, 0.8) 0%, rgba(255, 255, 80, 0.2) )',
				opacity: 0.8,
				transition: 'all 1.3s linear'
			};
		} else {
			return {
				position: 'absolute',
				left: '50%',
				bottom: `${100 - (this.state.hours - 12) * 8.333333 - 20}vh`,
				width: '20vh',
				height: '20vh',
				borderRadius: '50%',
				transform: 'translateX(-50%)',
				background:
					'radial-gradient(ellipse farthest-corner at 50% 50%, rgba(255, 255, 50, 0.8) 0%, rgba(255, 255, 80, 0.2) )',
				opacity: 0.8,
				transition: 'all 1.3s linear'
			};
		}
	}

	componentDidMount() {
		this.setState({
			granim: new Granim({
				element: '#granim-canvas',
				name: 'granim-canvas',
				direction: 'top-bottom', // 'diagonal', 'top-bottom', 'radial'
				opacity: [1, 1],
				isPausedWhenNotInView: true,
				defaultStateName: '00',
				states: {
					'00': {
						gradients: [['#012459', '#001322']]
					},
					'01': {
						gradients: [['#012459', '#001322']]
					},
					'02': {
						gradients: [['#003972', '#001322']]
					},
					'03': {
						gradients: [['#004372', '#00182b']]
					},
					'04': {
						gradients: [['#015f90', '#2b3f4f']]
					},
					'05': {
						gradients: [['#016792', '#00182b']]
					},
					'06': {
						gradients: [['#07729f', '#042d48']]
					},
					'07': {
						gradients: [['#12a1c0', '#07506e']]
					},
					'08': {
						gradients: [['#74d4cc', '#1386a6']]
					},
					'09': {
						gradients: [['#efeebc', '#61d0cf']]
					},
					'10': {
						gradients: [['#fee154', '#a3dec6']]
					},
					'11': {
						gradients: [['#fdc352', '#e8ed92']]
					},
					'12': {
						gradients: [['#ffac6f', '#ffe467']]
					},
					'13': {
						gradients: [['#fda65a', '#ffe467']]
					},
					'14': {
						gradients: [['#fd9e58', '#ffe467']]
					},
					'15': {
						gradients: [['#f18448', '#ffd364']]
					},
					'16': {
						gradients: [['#f06b7e', '#f9a856']]
					},
					'17': {
						gradients: [['#ca5a92', '#f4896b']]
					},
					'18': {
						gradients: [['#5b2c83', '#d1628b']]
					},
					'19': {
						gradients: [['#371a79', '#713684']]
					},
					'20': {
						gradients: [['#28166b', '#45217c']]
					},
					'21': {
						gradients: [['#192861', '#372074']]
					},
					'22': {
						gradients: [['#040b3c', '#233072']]
					},
					'23': {
						gradients: [['#040b3c', '#012459']]
					}
				}
			})
		});
	}

	render() {
		const { hours } = this.state;

		const watchTimeOfDay = () => {
			if (hours === 1) {
				this.state.granim.changeState('01');
			} else if (hours === 2) {
				this.state.granim.changeState('02');
			} else if (hours === 3) {
				this.state.granim.changeState('03');
			} else if (hours === 4) {
				this.state.granim.changeState('04');
			} else if (hours === 5) {
				this.state.granim.changeState('05');
			} else if (hours === 6) {
				this.state.granim.changeState('06');
			} else if (hours === 7) {
				this.state.granim.changeState('07');
			} else if (hours === 8) {
				this.state.granim.changeState('08');
			} else if (hours === 9) {
				this.state.granim.changeState('09');
			} else if (hours === 10) {
				this.state.granim.changeState('10');
			} else if (hours === 11) {
				this.state.granim.changeState('11');
			} else if (hours === 12) {
				this.state.granim.changeState('12');
			} else if (hours === 13) {
				this.state.granim.changeState('13');
			} else if (hours === 14) {
				this.state.granim.changeState('14');
			} else if (hours === 15) {
				this.state.granim.changeState('15');
			} else if (hours === 16) {
				this.state.granim.changeState('16');
			} else if (hours === 17) {
				this.state.granim.changeState('17');
			} else if (hours === 18) {
				this.state.granim.changeState('18');
			} else if (hours === 19) {
				this.state.granim.changeState('19');
			} else if (hours === 20) {
				this.state.granim.changeState('20');
			} else if (hours === 21) {
				this.state.granim.changeState('21');
			} else if (hours === 22) {
				this.state.granim.changeState('22');
			} else if (hours === 23) {
				this.state.granim.changeState('23');
			}
		};

		watchTimeOfDay();

		const style = {
			sky: {
				height: '100vh',
				width: '100vw',
				position: 'absolute',
				zIndex: '-1',
				top: 0,
				left: 0
			}
		};

		//this simulates 'inventory' for user in database
		const itemList = {
			items: ['floor', 'floor', 'floor', 'floor']
		};
		return (
			<div>
				<div style={style.sky}>
					<canvas id="granim-canvas" style={style.sky} />
					<div className="sun" style={this.calcSunPos()} />
					<Ground roomPosition={[2, 2]} timestamp={this.state.timeOfDay} />
				</div>
				<Clock time={{ ...this.state }} />
			</div>
		);
	}
}
