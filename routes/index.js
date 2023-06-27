const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const Shop = require('../models/shop');
const shopController = require('../controllers/shops');

/* GET home page. */
router.get('/', shopController.index);

// use this route to add below dummy data if needed
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
		mileage: 100000,
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

const priusServices = [
	{
		date: '2013-09-23',
		mileage: 10000,
		description: '10k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2014-01-03',
		mileage: 20000,
		description: '20k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2014-03-28',
		mileage: 30000,
		description: '30k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2014-08-10',
		mileage: 40000,
		description: '40k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2014-09-20',
		mileage: 50000,
		description: '50k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-01-01',
		mileage: 60000,
		description: '60k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-02-29',
		mileage: 70000,
		description: '70k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-06-07',
		mileage: 80000,
		description: '80k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-09-05',
		mileage: 90000,
		description: '90k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-11-10',
		mileage: 100000,
		description: '100k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-01-05',
		mileage: 110000,
		description: '110k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-05-02',
		mileage: 120000,
		description: '120k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-07-12',
		mileage: 130000,
		description: '130k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-09-07',
		mileage: 140000,
		description: '140k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-11-22',
		mileage: 150000,
		description: '150k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-02-11',
		mileage: 160000,
		description: '160k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-06-19',
		mileage: 170000,
		description: '170k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-10-11',
		mileage: 180000,
		description: '180k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-01-19',
		mileage: 190000,
		description: '190k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-04-02',
		mileage: 200000,
		description: '200k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-08-03',
		mileage: 210000,
		description: '210k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-10-25',
		mileage: 220000,
		description: '220k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-01-23',
		mileage: 230000,
		description: '230k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-06-06',
		mileage: 240000,
		description: '240k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-09-24',
		mileage: 250000,
		description: '250k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2020-01-09',
		mileage: 260000,
		description: '260k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2020-06-24',
		mileage: 270000,
		description: '270k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2023-01-01',
		mileage: 280000,
		description: '280k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},

];

const civicServices = [
	{
		date: '2015-01-10',
		mileage: 10000,
		description: '10k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-06-10',
		mileage: 20000,
		description: '20k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-02-10',
		mileage: 30000,
		description: '30k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-08-10',
		mileage: 40000,
		description: '40k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-03-10',
		mileage: 50000,
		description: '50k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-10-10',
		mileage: 60000,
		description: '60k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-06-10',
		mileage: 70000,
		description: '70k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-10-10',
		mileage: 80000,
		description: '80k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-05-10',
		mileage: 90000,
		description: '90k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2020-02-10',
		mileage: 100000,
		description: '100k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
]

const tacomaServices = [
	{
		date: '2015-01-10',
		mileage: 10000,
		description: '10k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-06-10',
		mileage: 20000,
		description: '20k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-02-10',
		mileage: 30000,
		description: '30k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-08-10',
		mileage: 40000,
		description: '40k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-03-10',
		mileage: 50000,
		description: '50k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-10-10',
		mileage: 60000,
		description: '60k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-06-10',
		mileage: 70000,
		description: '70k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-10-10',
		mileage: 80000,
		description: '80k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-05-10',
		mileage: 90000,
		description: '90k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2023-05-10',
		mileage: 100000,
		description: '100k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
]

const odysseyServices = [
	{
		date: '2015-01-10',
		mileage: 10000,
		description: '10k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-06-10',
		mileage: 20000,
		description: '20k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-02-10',
		mileage: 30000,
		description: '30k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-08-10',
		mileage: 40000,
		description: '40k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-03-10',
		mileage: 50000,
		description: '50k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-10-10',
		mileage: 60000,
		description: '60k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-06-10',
		mileage: 70000,
		description: '70k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-10-10',
		mileage: 80000,
		description: '80k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-05-10',
		mileage: 90000,
		description: '90k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2020-02-10',
		mileage: 100000,
		description: '100k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
]

const accordServices = [
	{
		date: '2015-01-10',
		mileage: 10000,
		description: '10k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2015-06-10',
		mileage: 20000,
		description: '20k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-02-10',
		mileage: 30000,
		description: '30k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2016-08-10',
		mileage: 40000,
		description: '40k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-03-10',
		mileage: 50000,
		description: '50k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2017-10-10',
		mileage: 60000,
		description: '60k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-06-10',
		mileage: 70000,
		description: '70k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2018-10-10',
		mileage: 80000,
		description: '80k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2019-05-10',
		mileage: 90000,
		description: '90k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
	{
		date: '2023-05-10',
		mileage: 100000,
		description: '100k service',
		price: 85.55,
		isInShop: false,
		isPickedUp: true,
		isPaid: true,
	},
]

async function addCustomer(c) {
	try {
		await Customer.create(c);
	} catch (err) {
		console.log(err);
	};
}

// add dummy data then redirect
async function addData(req, res) {
	customers.forEach(c => addCustomer(c))

	const chris = await Customer.findOne({first: 'Chris'});
	chrisCars.forEach(car => chris.cars.push(car));
	await chris.save();
	const chrisCar0 = await chris.cars[0];
	priusServices.forEach(serv => chrisCar0.services.push(serv));
	await chris.save();

	const wendy = await Customer.findOne({first: 'Wendy'});
	wendyCars.forEach(car => wendy.cars.push(car));
	await wendy.save();
	const wendyCar0 = await wendy.cars[0];
	civicServices.forEach(serv => wendyCar0.services.push(serv));
	await wendy.save();

	const aaron = await Customer.findOne({first: 'Aaron'});
	aaronCars.forEach(car => aaron.cars.push(car));
	await aaron.save();
	const aaronCar0 = await aaron.cars[0];
	tacomaServices.forEach(serv => aaronCar0.services.push(serv));
	await aaron.save();

	const john = await Customer.findOne({first: 'John'});
	johnCars.forEach(car => john.cars.push(car));
	await john.save();
	const johnCar0 = await john.cars[0];
	odysseyServices.forEach(serv => johnCar0.services.push(serv));
	await john.save();

	const beth = await Customer.findOne({first: 'Beth'});
	bethCars.forEach(car => beth.cars.push(car));
	await beth.save();
	const bethCar0 = await beth.cars[0];
	accordServices.forEach(serv => bethCar0.services.push(serv));
	await beth.save();

	res.redirect('/')
}