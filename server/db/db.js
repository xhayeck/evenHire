//Uses dotenv to get process.env variables
require('dotenv').config();
var connectStr = process.env.DATABASE_URL;
var Sequelize = require('Sequelize');

var sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

sequelize.authenticate()
  .then(function(err) {
  if(err) {
    console.log('cant connect to db', err);
  } else {
    console.log('connected to db')
  }
});

module.exports.sequelize = sequelize;

