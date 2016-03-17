//Uses dotenv to get process.env variables
require('dotenv').config();
var connectStr = process.env.DATABASE_URL;
var Sequelize = require('sequelize');

var sequelize = new Sequelize(connectStr, {
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
//Export our configured instance of our Heroku db
module.exports.db = sequelize;

