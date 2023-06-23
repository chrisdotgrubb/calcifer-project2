const Customer = require('../models/customer');

module.exports = {
	index,
	show
};


async function index(req, res) {
	try {
		const customers = await Customer.find({});
		const context = {
			customers,
		};
		res.render('customers/index', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function show(req, res) {
	const id = req.params.id;
	try {
		const customer = await Customer.findById(id);
		const context = {
			customer
		};
		res.render('customer/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}