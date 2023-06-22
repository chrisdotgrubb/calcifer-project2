const Customer = require('../models/customer');

module.exports = {
	index,
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