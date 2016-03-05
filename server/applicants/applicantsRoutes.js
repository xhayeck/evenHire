module.exports = function(router) {
  router.post('/login', function(req, res) {
    res.send('Im signing in as an applicant');
  });
  router.post('/signup', function(req, res) {
    console.log('tring to signup', req.body.firstName)
    res.send('tring to signup')
  })
};
