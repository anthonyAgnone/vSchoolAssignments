import React, { Component } from 'react';
import { withTimeContext } from './TimeProvider';

class ChatBox extends Component {
	render() {
		const groundColors = ['#1f2b0e', '#8ec63f', '#edc672', '#783938'];
		const style = {
			chatHeader: {
				backgroundColor: groundColors[this.props.timeOfDay]
			}
		};
		return (
			<div ref={div => (this.chatBox = div)} className="chat-box">
				<div className="chat-header" style={style.chatHeader}>
					<p>General Chat</p>
				</div>
				<div className="chat-body">all messages go here</div>
			</div>
		);
	}
}

export default withTimeContext(ChatBox);
