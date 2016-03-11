var db = require('../db/db').db;
var Models = require('../db/models')(db);
var authUtils = require('./utils');

module.exports = function(app) {
  //Takes jwt token and returns user type and user object
  app.post('/fetch', function(req, res) {
    var decoded = authUtils.decodeToken(req.body.jwt);
    var userType = decoded.userType;
    Models[userType].findOne({ where: {id: decoded.id }})
      .then(function(user) {
        res.send({
          userType: decoded.userType,
          user: user.dataValues
        });
      })
      .catch(function(err) {
        console.log('error in authController.js', err);
        return res.send(err)
      });
  });
};
