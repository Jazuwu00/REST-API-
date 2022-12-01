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
    defaultValue: 1886,
    validate:{
      min: {
        args: 1886,
        msg: 'el año no puede ser menor a 1'  
      },
      max: {
        args: new Date().getFullYear(),
        msg: 'no puede escribir un año mayor a ${new Date().getFullYear()}'
      }
    }
  }
}, {
  sequelize,
  underscored: true,
  modelName: 'autos'
})

module.exports = Auto
