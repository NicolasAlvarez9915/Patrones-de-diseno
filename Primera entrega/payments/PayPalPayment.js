const Payment = require('./Payment');

class DebitCardPayment extends Payment {
    process(amount) {
        let commissionRate = 0.025;
        let finalAmount = amount * (1 + commissionRate);
        if (amount > 750) finalAmount += 8;
        return { method: 'PayPal', total: finalAmount };
    }
}

module.exports = DebitCardPayment;
