const Payment = require('./Payment');

class DebitCardPayment extends Payment {
    process(amount) {
        let commissionRate = 0.01;
        let finalAmount = amount * (1 + commissionRate);
        if (amount > 500) finalAmount += 5;
        return { method: 'Debit Card', total: finalAmount };
    }
}

module.exports = DebitCardPayment;
