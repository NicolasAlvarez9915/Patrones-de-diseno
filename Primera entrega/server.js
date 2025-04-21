const express = require('express');
const cors = require('cors');
const app = express();
const paymentRoutes = require('./routes/PaymentRoutes.js');
const ReportRoutes = require('./routes/ReportRoutes.js');

app.use(cors());
app.use(express.json());
app.use('/report', ReportRoutes);
app.use('/payments', paymentRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
