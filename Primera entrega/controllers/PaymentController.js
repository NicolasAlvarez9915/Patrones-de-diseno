const PaymentService = require('../services/PaymentService.js');

class PaymentController {
    static processPayment(req, res) {
        try {
            const { paymentType, amount } = req.body;
            if (!paymentType || !amount) {
                return res.status(400).json({ error: 'Faltan datos requeridos' });
            }
            const result = PaymentService.processPayment(paymentType, amount);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static getPaymentMethods = (req, res) => {
        const methods = PaymentService.getAvailablePaymentMethods();
        res.json(methods);
    };

    static getAllPayments = (req, res) => {
        const payments = PaymentService.getAllPayments();
        res.json(payments);
    };
}

module.exports = PaymentController;