const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Turno = sequelize.define('Turno', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  servicioId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  peluqueroId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hora: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Turno;