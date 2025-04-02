const CreditCardPayment = require('../payments/CreditCardPayment.js');
const DebitCardPayment = require('../payments/DebitCardPayment.js');
const PayPalPayment = require('../payments/PayPalPayment.js');

class PaymentFactory {
    static getPayment(type) {
        switch (type.toUpperCase()) {
            case 'CREDIT_CARD': return new CreditCardPayment();
            case 'DEBIT_CARD': return new DebitCardPayment();
            case 'PAYPAL': return new PayPalPayment();
            default: throw new Error('Método de pago no soportado');
        }
    }
}

module.exports = PaymentFactory;