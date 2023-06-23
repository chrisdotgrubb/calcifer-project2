const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers');

//		'/customers'

router.get('/', customerController.index);
router.get('/new', customerController.new);
router.get('/:id', customerController.show);

router.post('/', customerController.create);

router.delete('/:id', customerController.delete);

module.exports = router;
