const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/counterRedis');

router.get('/redis', contadorController.getContadorRedis);
router.get('/redis/increment', contadorController.incrementarContadorRedis);
router.get('/redis/decrement', contadorController.decrementarContadorRedis);

module.exports = router;
