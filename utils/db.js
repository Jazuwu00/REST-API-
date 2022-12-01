const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  'autos',          // nombre de la base de datos
  'root',      // usuario
  'password',  // passowrd
  {               //datos de conexión
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
  }
)

const connectDb = async () => { 
  try {
    await sequelize.authenticate()
    console.log('conectado a la base de datos')
  } catch (error) { 
    console.log('ERROR:', error)
    return process.exit()
  }
}

module.exports = {connectDb, sequelize}