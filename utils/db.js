const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE,          // nombre de la base de datos
  process.env.USER,      // usuario
  process.env.PASSWORD,  // passowrd
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