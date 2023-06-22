const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers');

//		
router.get('/', customerController.index);

module.exports = router;
