import React, { Component } from 'react';
import { withGlobalContext } from './GlobalState';
import { withRouter } from 'react-router-dom';

import Color from '../assets/Colors';

class Form extends Component {
	constructor() {
		super();

		this.state = {
			searchTerm: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ searchTerm: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleFormData(this.state)(() => {
			this.props.history.push('/inspire');
		});
	}

	render() {
		const style = {
			form: {
				paddingBottom: '15px',
				paddingRight: '20px',
				input: {
					border: `3px solid ${Color.light}`,
					backgroundColor: 'transparent',
					color: Color.light,
					paddingLeft: '5px',
					height: '30px'
				},
				button: {
					border: `3px solid ${Color.light}`,
					backgroundColor: 'transparent',
					color: Color.light,
					height: '30px',
					marginLeft: '5px',
					cursor: 'pointer'
				}
			}
		};
		return (
			<form style={style.form} onSubmit={this.handleSubmit}>
				<input
					name="searchTerm"
					type="text"
					placeholder="Search"
					value={this.state.searchTerm}
					onChange={this.handleChange}
					style={style.form.input}
					className="searchBar"
				/>
				<input
					type="submit"
					value="Submit"
					onClick={this.props.handleChangeState('matching-gradient')}
					style={style.form.button}
				/>
			</form>
		);
	}
}

export default withGlobalContext(withRouter(Form));
