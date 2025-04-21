const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController.js');

router.post('/process', PaymentController.processPayment);
router.get('/payment-methods', PaymentController.getPaymentMethods);
router.get('/payments', PaymentController.getAllPayments);

module.exports = router;
