const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('gonchi', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
