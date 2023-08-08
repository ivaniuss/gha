const express = require('express');
const app = express();
const db = require('./db');
const sequelize = require('./mysql'); // Import the MySQL connection
const contadorRoutes = require('./routes/counter');
const contadorRoutesMysql = require('./routes/counterMysql');
const contadorRedis = require('./routes/counterRedis');
const cron = require('node-cron');

let job; // Variable para almacenar el cron job

app.post('/start-cronjob', (req, res) => {
  // Verificar si el cron job ya está en ejecución
  if (!job || job.getStatus() === 'stopped') {
    job = cron.schedule('*/2 * * * * *', () => {
      // Llamada al endpoint de incremento del contador
      fetch('http://localhost:3000/increment', { method: 'GET' })
        .then((response) => response.text())
        .then((result) => {
          console.log('Cron Job:', result);
        })
        .catch((error) => {
          console.error('Cron Job Error:', error);
        });
    }, {
      scheduled: true,
      timezone: 'UTC',
    });

    // Detener el cron job después de 10 segundos
    setTimeout(() => {
      job.stop();
      console.log('Cron Job Detenido');
    }, 10000);

    res.send('Cron Job Iniciado');
  } else {
    res.send('El Cron Job ya está en ejecución');
  }
});
  
app.use('/', contadorRoutes);
app.use('/', contadorRoutesMysql);
app.use('/', contadorRedis);

app.listen(3000, () => {
  console.log('Server listening on port:3000');
});