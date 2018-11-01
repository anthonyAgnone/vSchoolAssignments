import React, { Component } from 'react';
import { withGameContext } from './GameProvider';
import { withPiece } from './GetPiece';
import axios from 'axios';

import '../assets/css/editPiece.css';

class EditPieces extends Component {
	constructor(props) {
		super(props);
		const { material, type, wall, _id } = props;
		this.state = {
			_id,
			material: material || '',
			type: type || '',
			wall: wall || ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete(this);
	}

	static getDerivedStateFromProps({ wall, material, _id }, prevState) {
		if (prevState._id !== _id)
			return {
				...prevState,
				wall,
				material,
				_id
			};
		else return prevState;
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleEdit(e) {}

	handleDelete(e) {
		// e.preventDefault();
	}

	materialSelect() {
		return (
			<select name="material" value={this.state.material} onChange={this.handleChange}>
				<option value="">Choose Material</option>
				<option value="wood">Wood</option>
				<option value="tile">Tile</option>
			</select>
		);
	}

	wallSelect() {
		return (
			<select name="wall" value={this.state.wall} onChange={this.handleChange}>
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

	render() {
		const style = {
			editWrapper: {
				left: this.props._id ? '0' : '-25vw'
			}
		};
		return (
			<div className="edit-pieces" style={style.editWrapper}>
				<button className="close-button" onClick={this.props.handleIsEditing(null)}>
					X
				</button>
				<div className="form-wrap">
					<form>
						<h1>{this.props.type}</h1>
						{this.props.type === 'room' ? this.materialSelect() : null}
						{this.props.type === 'room' ? this.wallSelect() : null}
					</form>
				</div>
				<div className="buttons">
					<button
						onClick={() =>
							this.props.handleEditPiece(this.state._id, this.state.material, this.state.wall)
						}
						className="edit-button"
					>
						<span>Edit Piece</span>
					</button>
					<button onClick={() => this.handleDelete()} className="delete-button">
						<span>Delete Piece</span>
					</button>
				</div>
			</div>
		);
	}
}

export default withGameContext(({ handleIsEditing, handleEditPiece }) => ({
	handleIsEditing,
	handleEditPiece
}))(withPiece(EditPieces));

// export default withGameContext()()(withPiece(EditPieces));
