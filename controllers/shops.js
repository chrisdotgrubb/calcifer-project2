const Shop = require('../models/shop');


module.exports = {
	index,
}

async function index(req, res) {
	res.render('index', {title: 'Grubb Auto'});
}