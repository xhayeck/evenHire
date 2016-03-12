var Recruiter = require('./recruiterController');

module.exports = function (router) {
  //Allow recruiters to login
  router.post('/login', Recruiter.login);
  //Allow recruiters to sign up
  router.post('/signup', Recruiter.signup);
  //Get all posted jobs for a given recruiterId
  router.get('/allPostedJobs', Recruiter.getAllJobs);
  router.post('/newJob', Recruiter.postJob);
  //To view recruiters db, visit /api/recruiters/showRecruitersDB
  router.get('/showRecruitersDB', Recruiter.getAllRecs);
  //To view jobs_applicants db, visit /api/recruiters/showJobsAppsDB
  router.get('/showJobsAppsDB', Recruiter.getJobAppRelations);
  //Get list of applicants who've applied to particular job
  router.post('/getApplicants', Recruiter.grabbingApplicants);
};
