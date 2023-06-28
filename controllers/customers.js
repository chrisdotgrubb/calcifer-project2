const Customer = require('../models/customer');
const Shop = require('../models/shop');

module.exports = {
	index,
	search,
	show,
	new: newCustomer,
	create,
	delete: deleteCustomer,
	edit,
	update,
};


async function index(req, res) {
	try {
		const customers = await Customer.find({}).sort({last: 1, first: 1});
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

async function search(req, res) {
	console.log(req.query);
	const keyword = req.query.search;

	// define query to search first or last name
	const query = keyword ?
		{$or: [
			{first: {$regex: keyword, $options: 'i'}},
			{last: {$regex: keyword, $options: 'i'}}
		]} : {};
	try {
		const customers = await Customer.find(query).sort({last: 1, first: 1});
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
		values: '',
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
			values: req.body,
		};
		console.log(req.body);
		res.render('customers/new', context);
	};
}

async function deleteCustomer(req, res) {
	const id = req.params.customerId;
	try {
		await Customer.findByIdAndDelete(id);

		// delete any services that were in the shop when deleting customer
		await Shop.deleteMany({customerId: id});
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