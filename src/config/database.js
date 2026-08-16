// en este archivo se define la conexion a la base de datos usando sequelize y se exporta para que pueda ser usada por otros archivos
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE
});

module.exports = sequelize;