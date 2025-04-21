const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController.js');

router.post('/generate-report', ReportController.generateReport);

module.exports = router;