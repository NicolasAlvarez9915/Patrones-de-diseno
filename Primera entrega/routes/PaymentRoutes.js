const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController.js');

router.post('/process', PaymentController.processPayment);

module.exports = router;
