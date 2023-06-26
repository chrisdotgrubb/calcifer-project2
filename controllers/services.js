const Customer = require('../models/customer');

module.exports = {
	index,
	show,
	new: newService,
	create,
	// delete: deleteService,
	// edit,
	// update,
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
