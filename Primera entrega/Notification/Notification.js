class Notification {
    send(recipient, message){
        throw new Error('Método send() debe ser implementado');
    };
}

module.exports = Notification;