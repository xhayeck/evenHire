var db = require('../db/db').db;
var Models = require('../db/models')(db);
var authUtils = require('./utils');

module.exports = function(app) {
  //Takes jwt token and returns user type and user object
  app.post('/fetch', function(req, res) {
    var decoded = authUtils.decodeToken(req.body.jwt);
    //need to change userType to capital to match our sequelize database table schema
    var userType = decoded.userType.charAt(0).toUpperCase() + decoded.userType.slice(1);
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

  app.post('/resetPassword', function(req, res) {
    var decoded = authUtils.decodeToken(req.body.token);
    var userType = authUtils.capitalize(decoded.userType);
    Models[userType].findById(decoded.id)
    .then(function(user) {
      user.setPassword(req.body.newPassword, function(updated) {
        updated.save()
        .then(function() {
          return res.send({
            token: req.body.token,
            type: true,
            data: updated,
            userType: decoded.userType
          });
        })
        .catch(function(error) {
          return res.send({
            type: false,
            data: 'Error in updating your password'
          });
        });
      });
    })
    .catch(function(err) {
      return res.send({
        type: false,
        data: 'No account found'
      });
    });
  })
};
