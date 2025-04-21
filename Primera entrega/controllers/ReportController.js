const ReportService = require('../services/ReportService.js');
class ReportController {
    static async generateReport (req, res)  {
        try {
            const { options, paymentData } = req.body;
        
            const buffer = await ReportService.generatePDF(paymentData, options);
        
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="reporte.pdf"');
        
            res.send(buffer);
          } catch (error) {
            console.error('Error al generar PDF:', error);
            res.status(500).json({ message: 'Error al generar el reporte PDF' });
          }
    }

}
module.exports = ReportController;
