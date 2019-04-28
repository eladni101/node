const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Smadi102', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
