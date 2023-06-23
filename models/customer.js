const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
	year: {
		type: Number,
		required: true,
	},
	make: {
		type: String,
		required: true,
	},
	model: {
		type: String,
		required: true,
	},
	trimLevel: {
		type: String,
		required: true,
	},
	licensePlate: {
		type: String,
	},
	mileage: {
		type: Number,
		required: true,
	},
	color: {
		type: String,
	},
	engine: {
		type: String,
		required: true,
	},
	tireSize: {
		type: String,
	},
}, {timestamps: true}
);


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
	cars: [carSchema],
}, {timestamps: true});

module.exports = mongoose.model('Customer', customerSchema);