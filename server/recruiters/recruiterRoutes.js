var Recruiter = require('./recruiterController');

module.exports = function(router) {
  router.post('/login', Recruiter.login);

  router.post('/signup', Recruiter.signup);
  //Get all posted jobs for a given recruiterId
  router.get('/allPostedJobs/:id', Recruiter.getAllJobs);
  router.post('/newJob', Recruiter.postJob);
  //To view recruiters db, visit /api/recruiters/showRecruitersDB
  router.get('/showRecruitersDB', Recruiter.getAllRecs);
  //To view jobs_applicants db, visit /api/recruiters/showJobsAppsDB
  router.get('/showJobsAppsDB', Recruiter.getJobAppRelations);
};
