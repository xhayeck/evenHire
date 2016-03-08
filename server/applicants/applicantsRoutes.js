var Applicant = require('./applicantModel');

module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
  router.post('/signup', function(req, res) {
    Applicant.signup(req, res);
  });
  router.get('/allJobs', function(req, res) {
    res.send('Im trying to get all Jobs');
  });
  router.post('/apply', function(req, res) {
    res.send('Im trying to APPLY to a job');
  });
};
