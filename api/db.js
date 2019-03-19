const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})

module.exports = { sequelize, User }
