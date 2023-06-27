const Customer = require('../models/customer');
const Shop = require('../models/shop');

module.exports = {
	index,
	show,
	new: newService,
	create,
	delete: deleteService,
	edit,
	update,
};

async function index(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		car.services.sort((a, b) => {
			return b.mileage - a.mileage;
		});
		await customer.save();
		const context = {
			customer,
			car,
			title: `${car.model} services`,
		};
		res.render('services/index', context);
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
	const serviceId = req.params.serviceId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		const service_date = service.date.toISOString().slice(0,10);
		const context = {
			customer,
			car,
			service,
			service_date,
			title: `${car.model} ${service_date}`,
		};
		res.render('services/show', context);

	} catch (err) {
		const context = {
			error: err,
			message: err.message,
			title: 'Error',
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
			car,
			err: {
				errors: '',
			},
			title: 'New Service',
		};
		res.render('services/new', context);
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
	const carId = req.params.carId;
	req.body.isInShop = !!req.body.isInShop;
	req.body.isPickedUp = !!req.body.isPickedUp;
	req.body.isPaid = !!req.body.isPaid;
	let customer;
	let car;
	try {
		// get customer, then car
		customer = await Customer.findById(customerId);
		car = customer.cars.id(carId);

		// add to embedded service model
		car.services.push(req.body);
		await customer.save();

		// get new service to be able to access id
		const serviceId = car.services.slice(-1)[0].id;

		// if it is going into the shop, then add to Shop model
		if (req.body.isInShop) {
			await Shop.create({
				customerId,
				carId,
				serviceId,
				customerName: `${customer.first} ${customer.last}`,
				carName: `${car.make} ${car.model}`
			});
		};

		res.redirect(`/customers/${customerId}/cars/${carId}/services`);
	} catch (err) {
		const errKeys = Object.keys(err.errors);
		const context = {
			customer,
			car,
			err,
			errKeys,
			message: err.message,
			title: 'Error',
		};
		res.render('services/new', context);
	};
}

async function deleteService(req, res) {
	const customerId = req.params.customerId;
	const carId = req.params.carId;
	const serviceId = req.params.serviceId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		const wasInShop = service.isInShop;
		service.deleteOne();
		await customer.save();

		// if deleted service was in shop, remove from Shop
		if (wasInShop) {
			await Shop.findOneAndDelete({
				customerId,
				carId,
				serviceId
			});
		};

		res.redirect(`/customers/${customerId}/cars/${carId}/services`);
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
	const serviceId = req.params.serviceId;
	try {
		const customer = await Customer.findById(customerId);
		const car = customer.cars.id(carId);
		const service = car.services.id(serviceId);
		const service_date = service.date.toISOString().slice(0,10);
		const context = {
			customer,
			car,
			service,
			service_date,
			err: {
				errors: '',
			},
			title: `Edit ${car.model} ${service_date}`,
		};
		res.render('services/edit', context);
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

		// check if service as already in shop prior to update
		const wasInShop = service.isInShop;

		// update service
		Object.assign(service, body);
		await customer.save();

		// if inShop changes
		if (wasInShop !== req.body.isInShop) {
			// and it is now in shop, add to Shop
			if (req.body.isInShop) {
				await Shop.create({
					customerId,
					carId,
					serviceId,
					customerName: `${customer.first} ${customer.last}`,
					carName: `${car.make} ${car.model}`
				});
			// otherwise remove from shop
			} else {
				await Shop.findOneAndDelete({
					customerId,
					carId,
					serviceId
				});
			};
		};

		res.redirect(`/customers/${customerId}/cars/${carId}/services/${serviceId}`);
	} catch (err) {
		console.log(err);
		const errKeys = Object.keys(err.errors);
		const context = {
			customer,
			// add carId so form action has access to it after validation error
			car: {id: carId},
			service: body,
			service_date: body.date,
			err,
			errKeys,
			title: 'Error',
		};
		// add serviceId so form action has access to it after validation error
		context.service.id = serviceId;
		res.render('services/edit', context);
	};
}