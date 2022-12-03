const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Auto extends Model{ }

Auto.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'autos'
})

module.exports = Auto
