const Notification = require('./Notification.js');

class EmailNotification extends Notification {
  send(recipient, message){
    return `📧 Enviando correo a '${recipient}': ${message}`;
  }
}

module.exports = EmailNotification;