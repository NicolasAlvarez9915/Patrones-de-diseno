const Notification = require('./Notification.js');

class SmsNotification extends Notification {
    send(recipient, message){
      return `📲 Enviando SMS a '${recipient}': ${message}`;
    }
  }

module.exports = SmsNotification;