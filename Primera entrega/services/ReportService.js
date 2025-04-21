const PDFReportBuilder = require('../builders/PDFReportBuilder');
const ReportDirector = require('../directors/ReportDirector');

class ReportService {
  static async generatePDF(data, options) {
    const builder = new PDFReportBuilder();
    builder.setOptions(options);
    const director = new ReportDirector(builder);
    return await director.buildReport(data);
  }
}

module.exports = ReportService;