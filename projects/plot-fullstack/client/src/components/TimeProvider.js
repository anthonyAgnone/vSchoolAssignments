import React, { Component, createContext } from 'react';
import { subscribeToTimer } from '../api';

const { Consumer, Provider } = createContext();

export default class GameProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			minutes: 0,
			hours: 0,
			timeOfDay: 0,
			granim: null
		};

		subscribeToTimer((err, timestamp) => {
			this.setState({
				minutes: timestamp.minutes,
				hours: timestamp.hours,
				timeOfDay: timestamp.timeOfDay,
				ticks: timestamp.ticks
			});
		});
	}

	render() {
		const value = {
			...this.state
		};
		return <Provider value={value}>{this.props.children}</Provider>;
	}
}
export const withTimeContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
