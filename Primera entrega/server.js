const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes.js');

app.use(express.json());
app.use('/payments', paymentRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
