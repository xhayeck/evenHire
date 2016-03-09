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
  //To view jobs db, visit /api/applicants/showJobsDB
  router.get('/showJobsDB', function(req, res) {
    Applicant.getAllJobs(req, res);
  })
  //To view applicants db, visit /api/applicants/showApplicantsDB
  router.get('/showApplicantsDB', function(req, res) {
    Applicant.getAllApplicants(req, res);
  })
};
