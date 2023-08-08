const Counter = require('../models/counter');

const getCounter = async(req, res) => {
    try {
        const counter = await Counter.findOne();
        res.send(`Counter: ${counter.value}`);
        } catch (error) {
        res.status(500).send('Error retrieving counter');
    }
};

const incrementCounter = async(req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
          counter = new Counter({ value: 0 });
        }
        counter.value++;
        await counter.save();
        res.send(`Contador incrementado a: ${counter.value}`);
    } catch (error) {
        res.status(500).send('Error incrementing counter');
    }
};

const decrementCounter = async (req, res) => {
    try {
        let counter = await Counter.findOne();
        if (!counter) {
          counter = new Counter({ value: 0 });
        }
        counter.value--;
        await counter.save();
        res.send(`Contador decrementado a: ${counter.value}`);
    } catch (error) {
        res.status(500).send('Error decrementing counter');
    }
};

module.exports = {
  getCounter,
  incrementCounter,
  decrementCounter,
};
