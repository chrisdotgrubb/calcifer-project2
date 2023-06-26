const express = require('express');
const router = express.Router({mergeParams: true});

const servicesController = require('../controllers/services');

//			'/customers/:customerId/cars/:carId/services'


router.get('/', servicesController.index);
router.get('/new', servicesController.new);
router.get('/:serviceId/edit', servicesController.edit);
router.get('/:serviceId', servicesController.show);

router.post('/', servicesController.create);

router.put('/:serviceId', servicesController.update);

router.delete('/:serviceId', servicesController.delete);

module.exports = router;