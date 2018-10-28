const mongoose = require('mongoose');
const { Schema } = mongoose;

const pieceSchema = new Schema({
	id: Number,
	type: String,
	position: Array,
	material: String
});

module.exports = mongoose.model('Piece', pieceSchema);
