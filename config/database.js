// src/config/database.js
const { Sequelize } = require('sequelize');

// Reemplaza 'nombre_base_de_datos', 'usuario' y 'contraseña' con tus datos
const sequelize = new Sequelize('gonchi', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql', // Cambia esto si usas otro dialecto
});

module.exports = sequelize;
