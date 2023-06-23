const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers');

//		
router.get('/', customerController.index);
router.get('/:id', customerController.show);


module.exports = router;
