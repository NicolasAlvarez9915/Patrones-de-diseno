const PaymentFactory = require('../factories/PaymentFactory.js');
let payments = [
    {
      id: 0,
      amount: 100.0,
      method: 'Tarjeta de Crédito',
      date: '2025-04-20'
    },
    {
      id: 1,
      amount: 75.5,
      method: 'PayPal',
      date: '2025-04-18'
    }
  ];
class PaymentService {
    static processPayment(paymentType, amount) {
        const payment = PaymentFactory.getPayment(paymentType);
        const response = payment.process(amount);
        const objectResponse = {id: payments.length, amount: response.total, method: response.method, date: new Date()}
        payments.push(objectResponse);
        return objectResponse;
    }
    static getAvailablePaymentMethods = () => {
        return [
          { id: 1, name: 'Tarjeta de Crédito' },
          { id: 2, name: 'PayPal' },
          { id: 3, name: 'Transferencia Bancaria' },
          { id: 4, name: 'Cripto' }
        ];
    };

    static getAllPayments = () => {
        return payments;
    };
}



module.exports = PaymentService;