const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Shop = require('../models/shop');
const shopController = require('../controllers/shops');

/* GET home page. */
router.get('/', shopController.index);

// router.get('/add-data', addData);

module.exports = router;


const customers = [
	{
		first: 'Chris',
		last: 'Grubb',
		phone: '555-444-1234',
		email: 'chris@a.com',
		preferredCommunication: 'call',
	},
	{
		first: 'Wendy',
		last: 'Grubb',
		phone: '555-444-1235',
		email: 'wendy@a.com',
		preferredCommunication: 'text',
	},
	{
		first: 'Aaron',
		last: 'Aaronson',
		phone: '555-444-1236',
		email: 'aaron@a.com',
		preferredCommunication: 'email',
	},
	{
		first: 'John',
		last: 'Johnson',
		phone: '555-444-1237',
		email: 'john@a.com',
		preferredCommunication: 'call',
	},
	{
		first: 'Beth',
		last: 'Aaronson',
		phone: '555-444-1238',
		email: 'beth@a.com',
		preferredCommunication: 'call',
	},
];

const chrisCars = [
	{
		year: 2013,
		make: 'Toyota',
		model: 'Prius C',
		trimLevel: 'Three',
		licensePlate: 'ABC123',
		mileage: 285000,
		color: 'Grey',
		engine: '1.5 I4',
		tireSize: '175/65-15',
	},
	{
		year: 2020,
		make: 'Toyota',
		model: 'Highlander',
		trimLevel: 'XLE',
		licensePlate: 'ABC124',
		mileage: 20000,
		color: 'Grey',
		engine: '3.6 V6',
		tireSize: '235/65-18',
	},
];

const wendyCars = [
	{
		year: 2015,
		make: 'Honda',
		model: 'Civic',
		trimLevel: 'EX',
		licensePlate: 'DEF123',
		mileage: 150000,
		color: 'Red',
		engine: '1.8 I4',
		tireSize: '205/55-16',
	},
];

const aaronCars = [
	{
		year: 2015,
		make: 'Toyota',
		model: 'Tacoma',
		trimLevel: 'TRD',
		licensePlate: 'GHI123',
		mileage: 185000,
		color: 'Black',
		engine: '4.0 V6',
		tireSize: '265/70-16',
	},
];

const johnCars = [
	{
		year: 2019,
		make: 'Honda',
		model: 'Odyssey',
		trimLevel: 'EX-L',
		licensePlate: 'JKL123',
		mileage: 60000,
		color: 'Black',
		engine: '3.5 V6',
		tireSize: '235/60-18',
	},
];

const bethCars = [
	{
		year: 2021,
		make: 'Honda',
		model: 'Accord',
		trimLevel: 'Base',
		licensePlate: 'MNO123',
		mileage: 45000,
		color: 'Silver',
		engine: '2.0 I4',
		tireSize: '225/50-17',
	},
];

const services = [
	{
		date: '2023-01-10',
		mileage: 185000,
		description: 'Yearly service',
		price: 101.85,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
];

async function addCustomer(c) {
	try {
		await Customer.create(c);
	} catch (err) {
		console.log(err);
	};
}

function addData(req, res) {
	// customers.forEach(c => addCustomer(c))
	const chris = Customer.findOne({first: 'Chris'}, 'first last');
	console.log(chris.cars);
	res.redirect('/')
}