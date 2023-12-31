const express = require('express');
const router = express.Router({mergeParams: true});
const servicesRouter = require('./services');

const carController = require('../controllers/cars');

//			'/customers/:customerId/cars'

router.use('/:carId/services', servicesRouter);

router.get('/', carController.index);
router.get('/new', carController.new);
router.get('/:carId/edit', carController.edit);
router.get('/:carId', carController.show);

router.post('/', carController.create);

router.put('/:carId', carController.update);

router.delete('/:carId', carController.delete);

module.exports = router;