const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	first: {
		type: String,
		required: true,
	},
	last: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	preferredCommunication: {
		type: String,
		required: true,
	},
}, {timestamps: true});

module.exports = mongoose.model('Customer', customerSchema);