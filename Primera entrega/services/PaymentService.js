const NotificationFactory = require('../factories/NotificationFactory.js');
const PaymentFactory = require('../factories/PaymentFactory.js');
let payments = [
    {
      id: 0,
      amount: 100.0,
      method: 'Tarjeta de Crédito',
      date: '2025-04-20',
      addressee: 'prueba',
      notificationType: 'prueba',
      responseNotification: 'Prueba'
    },
    {
      id: 1,
      amount: 75.5,
      method: 'PayPal',
      date: '2025-04-18',
      addressee: 'prueba',
      notificationType: 'prueba',
      responseNotification: 'Prueba'
    }
  ];
class PaymentService {
    static processPayment(paymentType, amount, addressee, notificationType) {
        const payment = PaymentFactory.getPayment(paymentType);
        const response = payment.process(amount);
        const notification = NotificationFactory.createNotification(notificationType);
        const responseNotification = notification.send(addressee, 'Registro del pago exitoso');
        const objectResponse = {id: payments.length, amount: response.total, method: response.method, date: new Date(), responseNotification, addressee, notificationType}
        payments.push(objectResponse);
        return objectResponse;
    }
    static getAvailablePaymentMethods = () => {
        return [
          { id: "CREDIT_CARD", name: 'Tarjeta de Crédito' },
          { id: "PAYPAL", name: 'PayPal' },
          { id: "DEBIT_CARD", name: 'Tarjeta de Debito' }
        ];
    };

    static getAvailableNotificationMethods = () => {
        return [
          { id: "sms", name: 'Mensaje de texto' },
          { id: "email", name: 'Correo Electronico' },
        ];
    };

    static getAllPayments = () => {
        return payments;
    };
}



module.exports = PaymentService;