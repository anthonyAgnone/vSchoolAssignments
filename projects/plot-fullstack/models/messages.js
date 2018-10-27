const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
	user: {
		type: String,
		required: true
	},
	body: String
});

module.exports = mongoose.model('Message', messageSchema);
