const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
	date: {
		type: Date,
		required: [true, 'Date is required.'],
	},
	mileage: {
		type: Number,
		required: [true, 'Mileage is required.'],
	},
	description: {
		type: String,
		required: [true, 'Description is required.']
	},
	price: {
		type: Number,
		required: [true, 'Price is required.'],
	},
	isInShop: {
		type: Boolean,
		required: true,
	},
	isPickedUp: {
		type: Boolean,
		required: true,
	},
	isPaid: {
		type: Boolean,
		required: true,
	},
}, {timestamps: true});

const carSchema = new Schema({
	year: {
		type: Number,
		required: [true, 'Year is required.'],
	},
	make: {
		type: String,
		required: [true, 'Make is required.'],
	},
	model: {
		type: String,
		required: [true, 'Model is required.'],
	},
	trimLevel: {
		type: String,
		required: [true, 'Trim level is required.'],
	},
	engine: {
		type: String,
		required: [true, 'Engine is required.'],
	},
	mileage: {
		type: Number,
		required: [true, 'Mileage is required.'],
	},
	licensePlate: {
		type: String,
	},
	color: {
		type: String,
	},
	tireSize: {
		type: String,
	},
	services: [serviceSchema],
}, {timestamps: true});


const customerSchema = new Schema({
	first: {
		type: String,
		required: [true, 'First name is required.'],
	},
	last: {
		type: String,
		required: [true, 'Last name is required.'],
	},
	phone: {
		type: String,
		required: [true, 'Phone number is required.'],

		// not a great regex, mostly for easy visual of a validation error
		match: [/^\d{3}-\d{3}-\d{4}$/, 'Please enter phone number as: 123-456-7890'],
	},
	email: {
		type: String,
		required: [true, 'Email is required.'],
	},
	preferredCommunication: {
		type: String,
		required: [true, 'Communication preference is required.'],
	},
	cars: [carSchema],
}, {timestamps: true});

module.exports = mongoose.model('Customer', customerSchema);