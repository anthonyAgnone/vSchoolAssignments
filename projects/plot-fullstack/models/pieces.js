const mongoose = require('mongoose');
const { Schema } = mongoose;

const pieceSchema = new Schema({
	type: String,
	position: Array,
	material: String,
	wall: String,
	plot: {
		type: Schema.Types.ObjectId,
		ref: 'Plot'
	}
});

module.exports = mongoose.model('Piece', pieceSchema);
