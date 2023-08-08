const Sequelize = require('sequelize');
const sequelize = require('../mysql');

const counterMysql = sequelize.define('counterMysql', {
  value: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

// Sincroniza el modelo con la base de datos
counterMysql.sync()
  .then(() => {
    console.log('CounterMySQL table created and synchronized');
  })
  .catch((error) => {
    console.error('Error syncing CounterMySQL:', error);
  });

module.exports = counterMysql;