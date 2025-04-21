const PaymentService = require('../services/PaymentService.js');

class PaymentController {
    static processPayment(req, res) {
        try {
            const { paymentType, amount, addressee, notificationType } = req.body;
            if (!paymentType || !amount || !addressee || !notificationType) {
                return res.status(400).json({ error: 'Faltan datos requeridos' });
            }
            const result = PaymentService.processPayment(paymentType, amount, addressee, notificationType);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static getPaymentMethods = (req, res) => {
        const methods = PaymentService.getAvailablePaymentMethods();
        res.json(methods);
    };

    static getnotificationMethods = (req, res) => {
        const methods = PaymentService.getAvailableNotificationMethods();
        res.json(methods);
    };

    static getAllPayments = (req, res) => {
        const payments = PaymentService.getAllPayments();
        res.json(payments);
    };
}

module.exports = PaymentController;