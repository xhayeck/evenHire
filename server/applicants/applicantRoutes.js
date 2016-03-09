var Applicant = require('./applicantController');

module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
  router.post('/signup', Applicant.signup);
  router.get('/allJobs', Applicant.getAllJobs);
  router.post('/apply', Applicant.submitApplication);
  //To view jobs db, visit /api/applicants/showJobsDB
  router.get('/showJobsDB', Applicant.getAllJobs);
  //To view applicants db, visit /api/applicants/showApplicantsDB
  router.get('/showApplicantsDB', Applicant.getAllApplicants);
};
