const ReportBuilder = require('./ReportBuilder.js');
const PDFDocument = require('pdfkit');
class PDFReportBuilder extends ReportBuilder {
    doc;
    buffers;
    options;
    data;
  
    constructor() {
        super();
      this.doc = new PDFDocument({ size: 'A4' });
      this.buffers = [];
      this.doc.on('data', chunk => this.buffers.push(chunk));
    }
  
    setOptions(options) {
      this.options = options;
      console.log('setOptions',this.options)
    }
  
    addHeader() {
      this.doc.fontSize(20).text(this.options.title, { align: 'center' });
      if (this.options.includeLogo) {
        this.doc.image('assets/logo.jpg', 50, 15, { width: 80 });
      }
      this.doc.moveDown();
    }
  
    addPaymentDetails(data) {
      if (!this.options.includePaymentDetails) return;
      this.doc.fontSize(12).text(`Transacción: ${data.id}`);
      this.doc.text(`Tipo de Pago: ${data.method}`);
      this.doc.text(`Monto: $${data.amount}`);
      this.doc.moveDown();
    }
  
    addUserInfo(data) {
      if (!this.options.includeUserInfo) return;
      this.doc.text(`Usuario: ${data.addressee}`);
      this.doc.text(`${data.notificationType}: ${data.responseNotification}`);
      this.doc.moveDown();
    }
  
    addFooter() {
      if (this.options.includeTimestamp) {
        this.doc.text(`Fecha: ${new Date().toLocaleString()}`);
      }
      this.doc.text(this.options.footerMessage || '', { align: 'center' });
    }
  
    getReport() {
        return new Promise((resolve, reject) => {
            this.doc.on('end', () => {
              const finalBuffer = Buffer.concat(this.buffers);
              resolve(finalBuffer);
            });
            this.doc.on('error', reject);
            this.doc.end(); // Esto inicia el final del stream
          });
    }
  }

  module.exports = PDFReportBuilder;