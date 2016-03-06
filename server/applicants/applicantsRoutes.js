module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
  router.post('/signup', function(req, res) {
    console.log('trying to signup', req.body.firstName)
    res.send('trying to signup');
  });
  router.get('/allJobs', function(req, res) {
    res.send('Im trying to get all Jobs');
  });
  router.post('/apply', function(req, res) {
    res.send('Im trying to APPLY to a job');
  });
};
