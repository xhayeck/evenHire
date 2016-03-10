require('dotenv').config();
var token_secret = process.env.JWT_SECRET;
var jwt = require('jwt-simple');


module.exports = {
  issueToken: function(payload) {
    return jwt.encode(payload, token_secret);
  }
};
