const express = require('express');
const router = express.Router();
const carsRouter = require('./cars');

const customerController = require('../controllers/customers');

//			'/customers'

router.use('/:customerId/cars', carsRouter);

router.get('/', customerController.index);
router.get('/new', customerController.new);
router.get('/:customerId/edit', customerController.edit);
router.get('/:customerId', customerController.show);

router.post('/', customerController.create);

router.put('/:customerId', customerController.update);

router.delete('/:customerId', customerController.delete);

module.exports = router;
