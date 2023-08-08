const redis = require('redis');

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6479
})

const getContadorRedis = (req, res) => {
  client.get('contador', (err, value) => {
    if (err) {
      return res.status(500).send('Error retrieving Redis counter');
    }
    res.send(`Redis Contador: ${value || 0}`);
  });
};

const incrementarContadorRedis = (req, res) => {
  client.incr('contador', (err, value) => {
    if (err) {
      return res.status(500).send('Error incrementing Redis counter');
    }
    res.send(`Redis Contador incrementado a: ${value}`);
  });
};

const decrementarContadorRedis = (req, res) => {
  client.decr('contador', (err, value) => {
    if (err) {
      return res.status(500).send('Error decrementing Redis counter');
    }
    res.send(`Redis Contador decrementado a: ${value}`);
  });
};

module.exports = {
  // ...
  getContadorRedis,
  incrementarContadorRedis,
  decrementarContadorRedis,
};
