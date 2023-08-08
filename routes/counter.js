// routes/contadorRoutes.js

const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counter');

router.get('/', counterController.getCounter);
router.get('/increment', counterController.incrementCounter);
router.get('/decrement', counterController.incrementCounter);

module.exports = router;
