const PaymentFactory = require('../factories/PaymentFactory.js');

class PaymentService {
    static processPayment(paymentType, amount) {
        const payment = PaymentFactory.getPayment(paymentType);
        return payment.process(amount);
    }
}

module.exports = PaymentService;