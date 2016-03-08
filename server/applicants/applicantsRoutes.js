var Applicant = require('./applicantModel');

module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
  router.post('/signup', function(req, res) {
    Applicant.signup(req, res);
  });
  router.get('/allJobs', function(req, res) {
    Applicant.getAllJobs(req,res);
  });
  router.post('/apply', function(req, res) {
    Applicant.submitApplication(req, res); 
  });
};
