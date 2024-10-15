const Sequelize = require('sequelize')

const sequelize = new Sequelize('compound_db', 'root', 'ayush1084', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
})

module.exports = sequelize
