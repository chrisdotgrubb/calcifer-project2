const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// model to keep track of cars currently in the shop
// will be added and removed when creating or updating service.isInShop

const shopSchema = new Schema({
	customerId: {
		type: String,
		required: true,
	},
	carId: {
		type: String,
		required: true,
	},
	serviceId: {
		type: String,
		required: true,
	},
	// 'first last'
	customerName: {
		type: String,
		required: true,
	},
	// 'make model'
	carName: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Shop', shopSchema);
