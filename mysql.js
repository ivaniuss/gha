const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('counterdb_mysql', process.env.MYSQL_DATABASE_USER, process.env.MYSQL_DATABASE_PRIVATE_KEY, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL');
  })
  .catch((err) => {
    console.error('Unable to connect to MySQL:', err);
  });

module.exports = sequelize;
