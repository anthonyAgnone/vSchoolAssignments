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
			register: true
		};
		this.myElement = null;
		this.myTween = null;
		this.chatBox = null;
		this.chatTween = null;
		this.chatAnimation = this.animation.bind(this);
		this.animation = this.animation.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegisterView = this.handleRegisterView.bind(this);
		this.handleLoginView = this.handleLoginView.bind(this);
	}
	handleLogin() {
		setTimeout(() => {
			this.props.history.push({ pathname: '/plot' });
		}, 1500);
	}
	animation() {
		this.myTween = TweenLite.to(this.myElement, 1, {
			css: {
				transform: 'translateX(-50%) rotateX(60deg) rotateY(0deg) rotateZ(-45deg) scale(1)',
				borderColor: '#000'
			},
			onComplete: this.handleLogin
		});
		this.chatTween = TweenLite.to(this.chatBox, 1, {
			css: {
				transform: 'translateX(30%) scale(.7)'
			}
		});
	}

	handleRegisterView() {
		this.setState({
			register: true
		});
	}

	handleLoginView() {
		this.setState({
			register: false
		});
	}

	render() {
		const groundColors = ['#1f2b0e', '#8ec63f', '#edc672', '#783938'];
		const style = {
			ground: {
				backgroundColor: groundColors[this.props.timeOfDay]
			},
			chatHeader: {
				backgroundColor: groundColors[this.props.timeOfDay]
			}
		};
		return (
			<div>
				<div className="landing-header">
					<h1>Plot Control</h1>
					<h4>Create your own home with others. What can you create?</h4>
					<div ref={div => (this.chatBox = div)} className="chat-box">
						<div className="chat-header" style={style.chatHeader}>
							<p>General Chat</p>
						</div>
						<div className="chat-body">all messages go here</div>
					</div>
				</div>

				<div
					ref={div => (this.myElement = div)}
					style={style.ground}
					className="board-wrapper"
				>
					<div className="button-div">
						<button onClick={() => this.handleRegisterView()}>Register</button>
						<button onClick={() => this.handleLoginView()}>Login</button>
					</div>
					{this.state.register ? (
						<Register animation={this.animation} />
					) : (
						<Login animation={this.animation} />
					)}
				</div>
			</div>
		);
	}
}

export default withRouter(withTimeContext(LandingPage));
