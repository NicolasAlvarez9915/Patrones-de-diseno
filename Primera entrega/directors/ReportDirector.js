

class ReportDirector {
  constructor(builder) {this.builder = builder}

  buildReport(data) {
    this.builder.addHeader();
    this.builder.addPaymentDetails(data);
    this.builder.addUserInfo(data);
    this.builder.addFooter();
    return this.builder.getReport();
  }
}

module.exports = ReportDirector;