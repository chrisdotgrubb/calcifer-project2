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