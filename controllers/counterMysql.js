const CounterMySQL = require('../models/counterMysql');

// ...

const getContadorMySQL = async (req, res) => {
  try {
    const counter = await CounterMySQL.findOne();
    res.send(`MySQL Contador: ${counter.value}`);
  } catch (error) {
    res.status(500).send('Error retrieving MySQL counter');
  }
};

const incrementarContadorMySQL = async (req, res) => {
  try {
    let counter = await CounterMySQL.findOne();
    if (!counter) {
      counter = await CounterMySQL.create({ value: 0 });
    }
    counter.value++;
    await counter.save();
    res.send(`MySQL Contador incrementado a: ${counter.value}`);
  } catch (error) {
    res.status(500).send('Error incrementing MySQL counter');
  }
};

const decrementarContadorMySQL = async (req, res) => {
  try {
    let counter = await CounterMySQL.findOne();
    if (!counter) {
      counter = await CounterMySQL.create({ value: 0 });
    }
    counter.value--;
    await counter.save();
    res.send(`MySQL Contador decrementado a: ${counter.value}`);
  } catch (error) {
    res.status(500).send('Error decrementing MySQL counter');
  }
};

module.exports = {
  // ...
  getContadorMySQL,
  incrementarContadorMySQL,
  decrementarContadorMySQL,
};
