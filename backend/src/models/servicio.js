//en este archivo se definen las tablas que va a tener cada entidad de la base de datos, en este caso la tabla Servicio
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Servicio = sequelize.define('Servicio', {
  servicio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  tiempo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Servicio;