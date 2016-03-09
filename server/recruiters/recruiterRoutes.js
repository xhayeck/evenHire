var Recruiter = require('./recruiterController');

module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Signing in as a recruiter');
  });

  router.post('/signup', Recruiter.signup);
  router.get('/allPostedJobs', Recruiter.getAllJobs);
  router.post('/newJob', Recruiter.postJob);
  //To view recruiters db, visit /api/recruiters/showRecruitersDB
  router.get('/showRecruitersDB', Recruiter.getAllRecs);
  //To view jobs_applicants db, visit /api/recruiters/showJobsAppsDB
  router.get('/showJobsAppsDB', Recruiter.getJobAppRelations);
};
