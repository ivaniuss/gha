// routes/contadorRoutes.js

const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/counterMysql');

router.get('/mysql', contadorController.getContadorMySQL);
router.get('/mysql/increment', contadorController.incrementarContadorMySQL);
router.get('/mysql/decrement', contadorController.decrementarContadorMySQL);

module.exports = router;
