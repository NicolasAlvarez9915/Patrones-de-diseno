const EmailNotification = require('../Notification/EmailNotification');
const SmsNotification = require('../Notification/SmsNotification');

class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case 'email': return new EmailNotification();
            case 'sms': return new SmsNotification();
            default: throw new Error('Tipo de notificación no soportado');
        }   
    }
}

module.exports = NotificationFactory;