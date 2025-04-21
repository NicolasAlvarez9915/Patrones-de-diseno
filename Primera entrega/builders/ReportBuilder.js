class ReportBuilder {
    setOptions(options){
        throw new Error('Método setOptions() debe ser implementado');
    };
    addHeader(){
        throw new Error('Método addHeader() debe ser implementado');
    };
    addPaymentDetails(data){
        throw new Error('Método addPaymentDetails() debe ser implementado');
    };
    addUserInfo(data){
        throw new Error('Método addUserInfo() debe ser implementado');
    };
    addFooter(){
        throw new Error('Método addFooter() debe ser implementado');
    };
    getReport(){
        throw new Error('Método getReport() debe ser implementado');
    };
}

module.exports = ReportBuilder;