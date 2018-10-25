import React, { createContext, Component } from 'react';
import Granim from 'granim';
import Colors from '../assets/Colors';
const { Provider, Consumer } = createContext();

export default class GlobalState extends Component {
	constructor(props) {
		super(props);
		this.genCanvasRef = el => (this.canvasRef = el);
		this.state = {
			searchTerm: '',
			granim: null
		};

		this.handleChangeState = this.handleChangeState.bind(this);
		this.handleFormData = this.handleFormData.bind(this);
	}

	handleFormData(searchData) {
		return goto => this.setState({ form: searchData }, goto);
	}

	handleChangeState(gradientState) {
		return () => this.state.granim.changeState(gradientState);
	}

	componentDidMount() {
		this.setState({
			granim: new Granim({
				direction: 'top-bottom',
				element: '#granim-canvas',
				opacity: [1, 1],
				states: {
					'default-state': {
						gradients: [
							[Colors.genericGradient.genG1, Colors.genericGradient.genG2],
							[Colors.genericGradient.genG2, Colors.genericGradient.genG3],
							[Colors.genericGradient.genG3, Colors.genericGradient.genG4],
							[Colors.genericGradient.genG4, Colors.genericGradient.genG5],
							[Colors.genericGradient.genG5, Colors.genericGradient.genG6],
							[Colors.genericGradient.genG6, Colors.genericGradient.genG1]
						],
						transitionSpeed: 7000
					},
					'matching-gradient': {
						gradients: [
							[Colors.matchingGradient.mG6, Colors.matchingGradient.mG1],
							[Colors.matchingGradient.mG1, Colors.matchingGradient.mG2],
							[Colors.matchingGradient.mG2, Colors.matchingGradient.mG3],
							[Colors.matchingGradient.mG3, Colors.matchingGradient.mG4],
							[Colors.matchingGradient.mG4, Colors.matchingGradient.mG5],
							[Colors.matchingGradient.mG5, Colors.matchingGradient.mG6]
						],
						transitionSpeed: 7000
					},
					'third-gradient': {
						gradients: [
							[Colors.thirdGradient.tg1, Colors.thirdGradient.tg2],
							[Colors.thirdGradient.tg2, Colors.thirdGradient.tg3],
							[Colors.thirdGradient.tg3, Colors.thirdGradient.tg4],
							[Colors.thirdGradient.tg4, Colors.thirdGradient.tg5],
							[Colors.thirdGradient.tg5, Colors.thirdGradient.tg6],
							[Colors.thirdGradient.tg6, Colors.thirdGradient.tg1]
						],
						transitionSpeed: 4000
					}
				}
			})
		});
	}

	render() {
		const props = {
			handleChangeState: this.handleChangeState,
			genCanvasRef: this.genCanvasRef,
			handleFormData: this.handleFormData,
			...this.state
		};
		return <Provider value={props}>{this.props.children}</Provider>;
	}
}

export const withGlobalContext = C => props => (
	<Consumer>{value => <C {...value} {...props} />}</Consumer>
);
