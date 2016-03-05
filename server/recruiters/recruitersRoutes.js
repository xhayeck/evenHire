module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Signing in as a recruiter');
  });
  router.post('/signup', function(req, res) {
    console.log('Signing up ', req.body.companyName);
    res.send('my new signup')
  })
};
