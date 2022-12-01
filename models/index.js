const Fabricadeautos = require('./fabricadeautos')
const Auto = require('./auto')

//Representación de una relación 1N donde un auto puede tener una fabrica de autos y una fabrica de autos muchos autos
Auto.belongsTo(Fabricadeautos)
Fabricadeautos.hasMany(Auto)

module.exports = {
  Auto,
  Fabricadeautos
}

