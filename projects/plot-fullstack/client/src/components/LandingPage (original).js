import React, { Component } from 'react';
import { TweenLite } from 'gsap/all';
import { withTimeContext } from './TimeProvider';
import { withRouter } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import '../assets/css/landingPage.css';

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registered: true
		};
		this.myElement = null;
		this.myTween = null;
		this.animation = this.animation.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
		setTimeout(() => {
			this.props.history.push({ pathname: '/plot' });
		}, 1500);
	}

	animation() {
		this.myTween = TweenLite.to(this.myElement, 1, {
			css: {
				transform: 'translateX(-50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(1)'
			},
			onComplete: this.handleLogin
		});
	}

	render() {
		const groundColors = ['#1f2b0e', '#8ec63f', '#edc672', '#783938'];
		const style = {
			ground: {
				backgroundColor: groundColors[this.props.timeOfDay]
			}
		};
		return (
			<div ref={div => (this.myElement = div)} style={style.ground} className="board-wrapper">
				{this.state.registered ? (
					<Register animation={this.animation} />
				) : (
					<Login animation={this.animation} />
				)}
			</div>
		);
	}
}

export default withRouter(withTimeContext(LandingPage));
