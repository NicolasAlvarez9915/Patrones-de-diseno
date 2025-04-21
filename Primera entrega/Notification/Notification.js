class Notification {
    send(recipient, message){
        throw new Error('Método process() debe ser implementado');
    };
}

module.exports = Notification;