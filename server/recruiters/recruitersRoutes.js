var Recruiter = require('./recruiterModel');

module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Signing in as a recruiter');
  });
  router.post('/signup', function(req, res) {
    Recruiter.signup(req, res);
  });

  router.get('/allPostedJobs', function(req, res) {
    Recruiter.getAllJobs(req, res);
  });
  router.post('/newJob', function(req, res) {
    res.send('Im trying to create a new Job posting');
  });
  //To view recruiters db, visit /api/recruiters/showRecruitersDB
  router.get('/showRecruitersDB', function(req, res) {
    Recruiter.getAllRecs(req, res);
  })
  //To view jobs_applicants db, visit /api/recruiters/showJobsAppsDB
  router.get('/showJobsAppsDB', function(req, res) {
    Recruiter.getJobAppRelations(req, res);
  })
};
