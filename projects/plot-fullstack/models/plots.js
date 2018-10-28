const mongoose = require('mongoose');
const { Schema } = mongoose;

const plotSchema = new Schema({
	name: String,
	pieces: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Piece'
		}
	]
});

module.exports = mongoose.model('Plot', plotSchema);
