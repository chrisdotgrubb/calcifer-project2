const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	// new: newCustomer,
	// create,
	// delete: deleteCustomer,
	// edit,
	// update,
};


async function index(req, res) {
	const customerId = req.params.customerId;
	try {
		const customer = await Customer.findById(customerId);
		const context = {
			customer,
		};
		res.render('cars/index', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function show(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const context = {
			customer,
			car,
		};
		res.render('cars/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

// function newCustomer(req, res) {
// 	const context = {};
// 	res.render('customers/new', context);
// }

// async function create(req, res) {
// 	try {
// 		await Customer.create(req.body);
// 		res.redirect('/customers');
// 	} catch (err) {
// 		const context = {
// 			error: err,
// 			message: err.message,
// 		};
// 		res.render('error', context);
// 	};
// }

// async function deleteCustomer(req, res) {
// 	const id = req.params.customerId;
// 	try {
// 		await Customer.findByIdAndDelete(id);
// 		res.redirect('/customers');
// 	} catch (err) {
// 		const context = {
// 			error: err,
// 			message: err.message,
// 		};
// 		res.render('error', context);
// 	};
// }

// async function edit(req, res) {
// 	const id = req.params.customerId;
// 	try {
// 		const customer = await Customer.findById(id);
// 		const context = {
// 			customer,
// 		};
// 		res.render('customers/edit', context);
// 	} catch (err) {
// 		const context = {
// 			error: err,
// 			message: err.message,
// 		};
// 		res.render('error', context);
// 	};
// }

// async function update(req, res) {
// 	const id = req.params.customerId;
// 	const body = req.body;
// 	try {
// 		await Customer.findByIdAndUpdate(id, body, { runValidators: true });
// 		res.redirect(`/customers/${id}`);
// 	} catch (err) {
// 		// check what the error is to see what to do.
// 		// if validation issue, re-render the edit page with reasons for errors
// 		// if can't find object, redirect with error
// 		const context = {
// 			customer: body,
// 			error: err,
// 		};
// 		res.render('customers/edit', context);
// 	};
// }