const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	new: newCustomer,
	create,
	delete: deleteCustomer,
	edit,
	update,
};


async function index(req, res) {
	try {
		const customers = await Customer.find({});
		const context = {
			customers,
			title: 'Customers',
		};
		res.render('customers/index', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
}

async function show(req, res) {
	const id = req.params.customerId;
	try {
		const customer = await Customer.findById(id);
		const context = {
			customer,
			title: `${customer.first} ${customer.last}`,
		};
		res.render('customers/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
}

function newCustomer(req, res) {
	const context = {
		err: {
			errors: '',
		},
		title: 'New Customer',
	};
	res.render('customers/new', context);
}

async function create(req, res) {
	try {
		await Customer.create(req.body);
		res.redirect('/customers');
	} catch (err) {
		console.log(err);
		const context = {
			err,
			message: err.message,
			title: 'Error',
		};
		res.render('customers/new', context);
	};
}

async function deleteCustomer(req, res) {
	const id = req.params.customerId;
	try {
		await Customer.findByIdAndDelete(id);
		res.redirect('/customers');
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
}

async function edit(req, res) {
	const id = req.params.customerId;
	try {
		const customer = await Customer.findById(id);
		const context = {
			err: {
				errors: '',
			},
			customer,
			title: `Edit ${customer.first}`,
		};
		res.render('customers/edit', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
}

async function update(req, res) {
	const id = req.params.customerId;
	const body = req.body;
	try {
		await Customer.findByIdAndUpdate(id, body, { runValidators: true });
		res.redirect(`/customers/${id}`);
	} catch (err) {
		// check what the error is to see what to do.
		// if validation issue, re-render the edit page with reasons for errors
		// if can't find object, redirect with error
		const context = {
			customer: body,
			err,
			title: 'Error',
		};
		// add customer id so form action has access to it after validation error
		context.customer.id = id;
		res.render('customers/edit', context);
	};
}