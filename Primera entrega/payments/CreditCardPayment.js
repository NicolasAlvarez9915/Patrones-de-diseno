const Payment = require('./Payment.js');

class CreditCardPayment extends Payment {
    process(amount) {
        let commissionRate = 0.03;
        let finalAmount = amount * (1 + commissionRate);
        if (amount > 1000) finalAmount += 10;
        return { method: 'Credit Card', total: finalAmount };
    }
}

module.exports = CreditCardPayment;
