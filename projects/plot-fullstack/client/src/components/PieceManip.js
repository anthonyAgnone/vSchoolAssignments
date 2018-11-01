import React, { Component } from 'react';
import { withGameContext } from './GameProvider';
import HamburgerMenu from 'react-hamburger-menu';

import '../assets/css/createForm.css';

class PieceManip extends Component {
	constructor() {
		super();

		this.state = {
			type: '',
			material: '',
			walls: null,
			open: false,
			step: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		if (name === 'material') {
			this.setState(prevState => ({
				step: 1
			}));
		}

		this.setState({
			[name]: value
		});
	}

	handleOpen() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		const style = {
			manipWrapper: {
				right: this.state.open ? '0' : '-20vw'
			}
		};
		const handleMaterialForm = () => {
			if (this.state.type !== 'room') {
				return null;
			} else {
				return (
					<select name="material" value={this.state.material} onChange={this.handleChange}>
						<option value="">Choose Material</option>
						<option value="wood">Wood</option>
						<option value="tile">Tile</option>
					</select>
				);
			}
		};
		const handleWallForm = () => {
			if (this.state.type !== 'room' || this.state.step !== 1) {
				return null;
			} else {
				return (
					<select name="walls" value={this.state.wall} onChange={this.handleChange}>
						<option value="">Choose Wall</option>
						<option value="">None</option>
						<option value="east">East</option>
						<option value="south">South</option>
						<option value="west">West</option>
						<option value="north">North</option>
						<option value="northWest">North West</option>
						<option value="northEast">North East</option>
						<option value="southWest">South West</option>
						<option value="southEast">South East</option>
						<option value="northSouthEast">North South East</option>
						<option value="northSouthWest">North South West</option>
						<option value="southEastWest">South East West</option>
						<option value="northEastWest">North East West</option>
						<option value="northSouth">North South</option>
						<option value="eastWest">East West</option>
					</select>
				);
			}
		};
		return (
			<div className="form-wrapper" style={style.manipWrapper}>
				<HamburgerMenu
					isOpen={this.state.open}
					menuClicked={this.handleOpen}
					width={30}
					height={30}
					strokeWidth={3}
					animationDuration={0.5}
				/>
				<div className="form-wrap">
					<h2>Create Piece</h2>
					<form>
						<select name="type" value={this.state.type} onChange={this.handleChange}>
							<option value="null">Type of Piece</option>
							<option value="room">Room</option>
							<option value="garden">Garden</option>
						</select>
						{handleMaterialForm()}
						{handleWallForm()}
					</form>
					<button
						className="button"
						onClick={() =>
							this.props.handleAddPiece(
								this.state.type,
								this.state.material,
								this.state.walls
							)
						}
					>
						<span>Make Room</span>
					</button>
				</div>
			</div>
		);
	}
}

// export default withGameContext()()(PieceManip);
export default withGameContext()(PieceManip);
