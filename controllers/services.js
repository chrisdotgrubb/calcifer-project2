const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	new: newService,
	create,
	// delete: deleteService,
	edit,
	update,
};

async function index(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const context = {
			customer,
			car,
		};
		res.render('services/index', context);
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
	const serviceId = req.params.serviceId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		const context = {
			customer,
			car,
			service,
		};
		res.render('services/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function newService(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const context = {
			customer,
			car
		};
		res.render('services/new', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};

};

async function create(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	console.log(req.body);
	req.body.isInShop = !!req.body.isInShop;
	req.body.isPickedUp = !!req.body.isPickedUp;
	req.body.isPaid = !!req.body.isPaid;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		car.services.push(req.body);
		await customer.save();
		res.redirect(`/customers/${customerId}/cars/${carId}/services`);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function edit(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	const serviceId = req.params.serviceId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		const context = {
			customer,
			car,
			service,
		};
		res.render('services/edit', context);
	} catch (err) {
		const context = {
			error: err,
			message: err.message,
		};
		res.render('error', context);
	};
}

async function update(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	const serviceId = req.params.serviceId;
	req.body.isInShop = !!req.body.isInShop;
	req.body.isPickedUp = !!req.body.isPickedUp;
	req.body.isPaid = !!req.body.isPaid;
	const body = req.body;
	let customer;
	try {
		customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		Object.assign(service, body);
		await customer.save();
		res.redirect(`/customers/${customerId}/cars/${carId}/services/${serviceId}`);
	} catch (err) {
		console.log(err);
		const context = {
			customer,
			car: body,
			error: err,
		};
		// add carId so form action has access to it after validation error
		context.car.id = carId;
		res.render('services/edit', context);
	};
}