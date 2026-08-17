//en este archivo se definen las tablas que va a tener cada entidad de la base de datos, en este caso la tabla Peluquero
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Peluquero = sequelize.define('Peluquero', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Peluquero;