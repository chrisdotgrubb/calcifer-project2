const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	new: newCar,
	create,
	delete: deleteCar,
	edit,
	update,
};


async function index(req, res) {
	const customerId = req.params.customerId;
	try {
		const customer = await Customer.findById(customerId);
		customer.cars.sort((a, b) => {
			return b.year - a.year;
		});
		await customer.save();
		const context = {
			customer,
			title: `${customer.first} cars`,
		};
		res.render('cars/index', context);
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
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const context = {
			customer,
			car,
			title: `${car.make} ${car.model}`,
		};
		res.render('cars/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
}

async function newCar(req, res) {
	const customerId = req.params.customerId;
	try {
		const customer = await Customer.findById(customerId);
		const context = {
			customer,
			err: {
				errors: '',
			},
			title: 'New Car',
		};
		res.render('cars/new', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
		};
		res.render('error', context);
	};
};

async function create(req, res) {
	const customerId = req.params.customerId;
	let customer;
	try {
		customer = await Customer.findById(customerId);
		customer.cars.push(req.body);
		await customer.save();
		res.redirect(`/customers/${customerId}/cars`);
	} catch (err) {
		if (customer) {
			const errKeys = Object.keys(err.errors);
			const context = {
				customer,
				err,
				errKeys,
				message: err.message,
				title: 'Error',
			};
			res.render('cars/new', context);
		} else {
			const context = {
				err,
				message: err.message,
				title: 'Error',
			};
			res.render('error', context);
		}
	};
}

async function deleteCar(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		car.deleteOne();
		await customer.save();
		res.redirect(`/customers/${customerId}/cars`);
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
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const context = {
			customer,
			car,
			err: {
				errors: '',
			},
			title: `Edit ${car.make} ${car.model}`,
		};
		res.render('cars/edit', context);
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
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	const body = req.body;
	let customer;
	try {
		customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		Object.assign(car, body);
		await customer.save();
		res.redirect(`/customers/${customerId}/cars/${carId}`);
	} catch (err) {
		const errKeys = Object.keys(err.errors);
		const context = {
			customer,
			car: body,
			err,
			errKeys,
			title: 'Error',
		};
		// add carId so form action has access to it after validation error
		context.car.id = carId;
		res.render('cars/edit', context);
	};
}