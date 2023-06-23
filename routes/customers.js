const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers');

//		
router.get('/', customerController.index);
router.get('/new', customerController.new);
router.get('/:id', customerController.show);

router.post('/', customerController.create);

module.exports = router;
