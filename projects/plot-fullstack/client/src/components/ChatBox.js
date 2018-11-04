import React, { Component } from 'react';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export default class ChatBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};
		this.sendSocketIO = this.sendSocketIO.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	sendSocketIO(e) {
		e.preventDefault();
		socket.emit('sent_message', this.state.message);
	}
	handleChange({ target: { name, value } }) {
		this.setState({
			[name]: value
		});
	}
	render() {
		const style = {
			chatHeader: {
				backgroundColor: '#1f2b0e'
			},
			body: {
				height: '50%',
				width: '100%',
				padding: '5%',
				overflowY: 'scroll'
			},
			form: {
				display: 'flex',
				justifyContent: 'space-between',
				padding: '0 5px',
				button: {
					backgroundColor: '#1f2b0e',
					border: 0,
					borderRadius: '4px',
					color: '#fff'
				}
			}
		};
		return (
			<div ref={div => (this.chatBox = div)} className="chat-box">
				<div className="chat-header" style={style.chatHeader}>
					<p>General Chat</p>
				</div>
				<div style={style.body} className="chat-body">
					all messages go here
				</div>
				<form style={style.form} onSubmit={this.sendSocketIO}>
					<input onChange={this.handleChange} type="text" name="message" id="password" />
					<button style={style.form.button}>Submit</button>
				</form>
			</div>
		);
	}
}
