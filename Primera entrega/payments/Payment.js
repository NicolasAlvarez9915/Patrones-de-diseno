class Payment {
    process(amount) {
        throw new Error('Método process() debe ser implementado');
    }
}

module.exports = Payment;