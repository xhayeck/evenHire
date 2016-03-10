require('dotenv').config();
var token_secret = process.env.JWT_SECRET;
var jwt = require('jwt-simple');


module.exports = {
  issueToken: function(user) {
    return jwt.encode(user, token_secret);
  }
};
