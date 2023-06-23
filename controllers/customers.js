const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	new: newCustomer,
	create,
	delete: deleteCustomer,
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
		res.render('customers/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

function newCustomer(req, res) {
	const context = {};
	res.render('customers/new', context);
}

async function create(req, res) {
	try {
		await Customer.create(req.body);
		res.redirect('/customers');
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function deleteCustomer(req, res) {
	const id = req.params.id;
	try {
		await Customer.findByIdAndDelete(id);
		res.redirect('/customers');
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}